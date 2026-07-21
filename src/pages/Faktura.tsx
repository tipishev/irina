import { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import QRCode from "qrcode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LOGO_URL = "/lovable-uploads/logo-Irina-Zay-print.png";
const LOGO_ASPECT = 486 / 600; // height / width, matches the print-optimized logo asset

// Fixed seller/receiver details — this tool is single-tenant (Irina only), so these
// are frozen constants rather than editable fields. Edit here if the business details change.
const SELLER = {
  sellerName: "Irina Zayakina",
  sellerAddrName: "Irina Zayakina",
  sellerStreet: "Abrahamsbergsvägen 66",
  sellerPostal: "168 30 Bromma",
  sellerBankgiro: "5871-9832",
  sellerOrgnr: "830524-6723",
  sellerVatnr: "SE830524672301",
  sellerFskatt: "Ja",
};

type Item = { benamning: string; antal: number; apris: number };

type InvoiceMeta = {
  fakturanummer: string;
  fakturadatum: string;
  leveransdatum: string;
  paymentDays: number;
  drojsmalsranta: number;
  momsrate: number;
  custName: string;
  custCompany: string;
  custPhone: string;
  custAddress: string;
  custEmail: string;
};

function toISODateLocal(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function todayISO(): string {
  return toISODateLocal(new Date());
}

function addDays(dateStr: string, days: number): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);
  return toISODateLocal(dt);
}

function buildDefaultMeta(): InvoiceMeta {
  const today = todayISO();
  return {
    fakturanummer: "",
    fakturadatum: today,
    leveransdatum: today,
    paymentDays: 14,
    drojsmalsranta: 7.5,
    momsrate: 25,
    custName: "",
    custCompany: "",
    custPhone: "",
    custAddress: "",
    custEmail: "",
  };
}

const DEFAULT_ITEMS: Item[] = [];

function fmt(n: number): string {
  return (Math.round(n * 100) / 100).toLocaleString("sv-SE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function computeTotals(items: Item[], momsrate: number) {
  const netto = items.reduce((s, it) => s + (Number(it.antal) || 0) * (Number(it.apris) || 0), 0);
  const moms = netto * (momsrate / 100);
  return { netto, exklMoms: netto, moms, attBetala: netto + moms };
}

// UsingQR format (Visma spec rev. 2) — read by Swedish banking apps to auto-fill Bankgiro payments.
function buildUsingQRPayload(meta: InvoiceMeta, forfallodatum: string, attBetala: number, moms: number): string {
  const payload = {
    uqr: 1,
    tp: 1,
    nme: SELLER.sellerName,
    cid: SELLER.sellerOrgnr,
    iref: meta.fakturanummer, // no proper OCR checksum in use — invoice number doubles as the free-text reference
    idt: (meta.fakturadatum || "").replace(/-/g, ""),
    ddt: (forfallodatum || "").replace(/-/g, ""),
    due: Math.round(attBetala * 100) / 100,
    vat: Math.round(moms * 100) / 100,
    pt: "BG",
    acc: SELLER.sellerBankgiro,
  };
  return JSON.stringify(payload);
}

const Faktura = () => {
  const [meta, setMeta] = useState<InvoiceMeta>(buildDefaultMeta);
  const [items, setItems] = useState<Item[]>(DEFAULT_ITEMS);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const logoImgRef = useRef<HTMLImageElement | null>(null);

  const { netto, exklMoms, moms, attBetala } = computeTotals(items, meta.momsrate);
  const betalningsvillkor = `${meta.paymentDays} dagar netto`;
  const forfallodatum = addDays(meta.fakturadatum, meta.paymentDays);

  useEffect(() => {
    const img = new Image();
    img.src = LOGO_URL;
    img.onload = () => {
      logoImgRef.current = img;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    if (!SELLER.sellerBankgiro || !attBetala) {
      setQrDataUrl("");
      return;
    }
    QRCode.toDataURL(buildUsingQRPayload(meta, forfallodatum, attBetala, moms), { margin: 1, width: 300 })
      .then((url) => {
        if (!cancelled) setQrDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setQrDataUrl("");
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta.fakturanummer, meta.fakturadatum, forfallodatum, attBetala, moms]);

  function updateMeta<K extends keyof InvoiceMeta>(field: K, value: InvoiceMeta[K]) {
    setMeta((prev) => ({ ...prev, [field]: value }));
  }

  function updateItem(i: number, field: keyof Item, value: string) {
    setItems((prev) => {
      const next = [...prev];
      const it = { ...next[i] };
      if (field === "benamning") it.benamning = value;
      else if (field === "antal") it.antal = parseFloat(value) || 0;
      else if (field === "apris") it.apris = parseFloat(value) || 0;
      next[i] = it;
      return next;
    });
  }

  function removeItem(i: number) {
    setItems((prev) => prev.filter((_, idx) => idx !== i));
  }

  function addItem() {
    setItems((prev) => [...prev, { benamning: "", antal: 1, apris: 0 }]);
  }

  async function generatePDF() {
    const doc = new jsPDF({ unit: "mm", format: "a4" });

    let pdfQrDataUrl = "";
    if (SELLER.sellerBankgiro && attBetala) {
      try {
        pdfQrDataUrl = await QRCode.toDataURL(buildUsingQRPayload(meta, forfallodatum, attBetala, moms), {
          margin: 1,
          width: 300,
        });
      } catch {
        pdfQrDataUrl = "";
      }
    }

    const M = 15;
    const W = 210 - 2 * M;

    const logoW = 32;
    const logoH = logoW * LOGO_ASPECT;
    if (logoImgRef.current) {
      doc.addImage(logoImgRef.current, "PNG", M, M, logoW, logoH);
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.text("Faktura", M + W, M + 10, { align: "right" });

    const metaTop = M + logoH + 8;
    const leftColW = W * 0.55;
    const rightColX = M + leftColW + 6;
    const rightColW = W - leftColW - 6;

    const metaPairs: [string, string, string, string][] = [
      ["Fakturanummer", meta.fakturanummer, "", ""],
      ["Fakturadatum", meta.fakturadatum, "Leveransdatum", meta.leveransdatum],
      ["Betalningsvillkor", betalningsvillkor, "Förfallodatum", forfallodatum],
      ["Dröjsmålsränta", `${fmt(meta.drojsmalsranta)} %`, "", ""],
    ];
    let my = metaTop;
    metaPairs.forEach(([l1, v1, l2, v2]) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(100);
      doc.text(l1, M, my);
      if (l2) doc.text(l2, M + leftColW / 2, my);
      doc.setTextColor(20);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10.5);
      doc.text(String(v1), M, my + 4.2);
      if (l2) doc.text(String(v2), M + leftColW / 2, my + 4.2);
      my += 11;
    });

    const boxTop = metaTop - 6;
    const boxH = 42;
    doc.setDrawColor(30);
    doc.setLineWidth(0.3);
    doc.rect(rightColX, boxTop, rightColW, boxH);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("Fakturaadress", rightColX + 3, boxTop + 6);
    doc.line(rightColX + 3, boxTop + 8, rightColX + rightColW - 3, boxTop + 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const addrLines = [meta.custName, meta.custCompany, meta.custPhone, meta.custAddress, meta.custEmail].filter(
      Boolean
    );
    addrLines.forEach((line, i) => {
      doc.text(line, rightColX + 3, boxTop + 13 + i * 5);
    });

    let ty = Math.max(my, boxTop + boxH) + 10;
    const colBenamning = M;
    const colAntal = M + W * 0.55;
    const colApris = M + W * 0.72;
    const colSumma = M + W;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(50);
    doc.text("Benämning", colBenamning, ty);
    doc.text("Antal, timmar", colAntal, ty, { align: "right" });
    doc.text("À-pris", colApris, ty, { align: "right" });
    doc.text("Summa", colSumma, ty, { align: "right" });
    doc.setDrawColor(30);
    doc.setLineWidth(0.4);
    doc.line(M, ty + 1.5, M + W, ty + 1.5);

    ty += 7;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(20);
    items.forEach((it) => {
      const sum = (Number(it.antal) || 0) * (Number(it.apris) || 0);
      doc.text(String(it.benamning), colBenamning, ty);
      doc.text(fmt(it.antal), colAntal, ty, { align: "right" });
      doc.text(`${fmt(it.apris)} kr`, colApris, ty, { align: "right" });
      doc.text(`${fmt(sum)} kr`, colSumma, ty, { align: "right" });
      doc.setDrawColor(220);
      doc.setLineWidth(0.15);
      doc.line(M, ty + 2, M + W, ty + 2);
      ty += 7;
    });

    // QR (left) + summary/total (right) share one row — keeps the QR out of the line items' way
    const rowTop = ty + 6;
    let qrBlockH = 0;
    if (pdfQrDataUrl) {
      const qrSize = 26;
      doc.addImage(pdfQrDataUrl, "PNG", M, rowTop, qrSize, qrSize);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(120);
      doc.text("Skanna för att betala", M + qrSize / 2, rowTop + qrSize + 4, { align: "center" });
      qrBlockH = qrSize + 8;
    }

    let sty = rowTop;
    const sumColW = 45;
    const sc = [M + W - 3 * sumColW, M + W - 2 * sumColW, M + W - sumColW, M + W];
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(50);
    doc.text("Netto", sc[0], sty, { align: "right" });
    doc.text("Exkl moms", sc[1], sty, { align: "right" });
    doc.text("Moms %", sc[2], sty, { align: "right" });
    doc.text("Moms", sc[3], sty, { align: "right" });
    doc.line(M + W - 4 * sumColW, sty + 1.5, M + W, sty + 1.5);
    sty += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(20);
    doc.text(`${fmt(netto)} kr`, sc[0], sty, { align: "right" });
    doc.text(`${fmt(exklMoms)} kr`, sc[1], sty, { align: "right" });
    doc.text(`${fmt(meta.momsrate)} %`, sc[2], sty, { align: "right" });
    doc.text(`${fmt(moms)} kr`, sc[3], sty, { align: "right" });

    sty += 9;
    const totalBoxW = 90;
    const totalBoxX = M + W - totalBoxW;
    doc.setFillColor(242, 242, 242);
    doc.rect(totalBoxX, sty - 5.5, totalBoxW, 10, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("ATT BETALA", totalBoxX + 3, sty + 1);
    doc.setFontSize(15);
    doc.text(`${fmt(attBetala)} kr`, M + W - 3, sty + 1, { align: "right" });

    const summaryBlockH = sty + 4.5 - rowTop;
    ty = rowTop + Math.max(qrBlockH, summaryBlockH) + 4;

    const footTop = 260;
    doc.setDrawColor(200);
    doc.setLineWidth(0.15);
    doc.line(M, footTop - 5, M + W, footTop - 5);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(20);
    doc.text("Adress", M, footTop);
    doc.setFont("helvetica", "normal");
    doc.text(SELLER.sellerAddrName, M, footTop + 5);
    doc.text(SELLER.sellerStreet, M, footTop + 10);
    doc.text(SELLER.sellerPostal, M, footTop + 15);

    const fx = M + W * 0.5;
    doc.setFontSize(8);
    doc.setTextColor(120);
    doc.text(`Referensnummer: ${meta.fakturanummer}`, fx, footTop - 1);
    doc.setTextColor(20);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("Bankgiro", fx, footTop + 5);
    doc.setFont("helvetica", "normal");
    doc.text(SELLER.sellerBankgiro, fx + 42, footTop + 5);
    doc.setFont("helvetica", "bold");
    doc.text("Organisationsnr", fx, footTop + 10);
    doc.setFont("helvetica", "normal");
    doc.text(SELLER.sellerOrgnr, fx + 42, footTop + 10);
    doc.setFont("helvetica", "bold");
    doc.text("Momsreg.nr", fx, footTop + 15);
    doc.setFont("helvetica", "normal");
    doc.text(SELLER.sellerVatnr, fx + 42, footTop + 15);
    doc.setFont("helvetica", "bold");
    doc.text("Godkänd för F-skatt", fx, footTop + 20);
    doc.setFont("helvetica", "normal");
    doc.text(SELLER.sellerFskatt, fx + 42, footTop + 20);

    doc.save(`Faktura_${meta.fakturanummer || "utkast"}.pdf`);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <style>{`
        .invoice-wrap { display: flex; justify-content: center; }
        .invoice {
          background: #fff;
          width: 210mm;
          min-height: 297mm;
          padding: 15mm;
          box-shadow: 0 0 0 1px #ddd, 0 4px 16px rgba(0,0,0,.08);
          font-family: Arial, Helvetica, sans-serif;
          color: #1a1a1a;
          font-size: 10.5pt;
        }
        .inv-header { display: flex; justify-content: space-between; align-items: flex-start; }
        .inv-header img { height: 24mm; }
        .inv-title { font-size: 26pt; font-weight: 700; text-align: right; }
        .inv-meta-row { display: flex; margin-top: 8mm; gap: 6mm; }
        .inv-meta-left { flex: 1.1; }
        .inv-meta-left table { width: 100%; border-collapse: collapse; }
        .inv-meta-left td { padding: 2mm 2mm 2mm 0; vertical-align: top; width: 50%; }
        .inv-meta-left .lbl { font-size: 8pt; color: #666; text-transform: uppercase; letter-spacing: .03em; }
        .inv-meta-left .val { font-size: 10.5pt; margin-top: .5mm; }
        .inv-address-box { flex: 1; border: 1px solid #222; border-radius: 3px; padding: 3mm 4mm; }
        .inv-address-box .hdr { font-weight: 700; font-size: 9pt; border-bottom: 1px solid #222; padding-bottom: 1.5mm; margin-bottom: 1.5mm; }
        .inv-address-box div.line { line-height: 1.5; }
        table.inv-items { width: 100%; border-collapse: collapse; margin-top: 8mm; }
        table.inv-items thead th { text-align: left; font-size: 8.5pt; text-transform: uppercase; letter-spacing: .02em; border-bottom: 1.5px solid #222; padding: 1.5mm 2mm; color: #333; }
        table.inv-items thead th.num { text-align: right; }
        table.inv-items tbody td { padding: 2mm 2mm; border-bottom: 0.5px solid #ddd; font-size: 10pt; }
        table.inv-items tbody td.num { text-align: right; font-variant-numeric: tabular-nums; }
        .inv-totals-row { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 6mm; gap: 6mm; }
        .inv-qr-block { text-align: center; flex-shrink: 0; }
        .inv-totals-block { display: flex; flex-direction: column; align-items: flex-end; gap: 3mm; }
        table.inv-summary-table { border-collapse: collapse; min-width: 90mm; }
        table.inv-summary-table th { font-size: 8.5pt; text-transform: uppercase; color: #333; border-bottom: 1.5px solid #222; padding: 1.5mm 2mm; text-align: right; }
        table.inv-summary-table th:first-child { text-align: left; }
        table.inv-summary-table td { padding: 1.5mm 2mm; text-align: right; font-size: 10pt; border-bottom: 0.5px solid #ddd; }
        table.inv-summary-table td:first-child { text-align: left; }
        .inv-total-box { min-width: 90mm; display: flex; justify-content: space-between; align-items: baseline; background: #f2f2f2; padding: 3mm 4mm; border-radius: 3px; }
        .inv-total-box .lbl { font-weight: 700; font-size: 11pt; }
        .inv-total-box .val { font-weight: 700; font-size: 15pt; }
        .inv-footer { display: flex; justify-content: space-between; margin-top: 16mm; padding-top: 4mm; border-top: 0.5px solid #ccc; font-size: 9pt; }
        .inv-footer .col { flex: 1; }
        .inv-footer .hdr { font-weight: 700; margin-bottom: 1.5mm; }
        .inv-footer div.line { line-height: 1.5; }
        .inv-footer .ref { font-size: 8pt; color: #666; margin-bottom: 1mm; }
        .seller-frozen > div { display: flex; justify-content: space-between; gap: 10px; padding: 4px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; }
        .seller-frozen .k { color: #666; }
        .seller-frozen .v { font-weight: 500; text-align: right; }
      `}</style>

      <h1 className="text-2xl font-bold mb-6">Генератор фактур</h1>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6 min-w-0">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Данные фактуры
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Номер фактуры</label>
                  <Input
                    className="h-9"
                    value={meta.fakturanummer}
                    onChange={(e) => updateMeta("fakturanummer", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Дата фактуры</label>
                  <Input
                    className="h-9"
                    type="date"
                    value={meta.fakturadatum}
                    onChange={(e) => updateMeta("fakturadatum", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Дата поставки</label>
                  <Input
                    className="h-9"
                    type="date"
                    value={meta.leveransdatum}
                    onChange={(e) => updateMeta("leveransdatum", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Дней на оплату</label>
                  <Input
                    className="h-9"
                    type="number"
                    step="1"
                    value={meta.paymentDays}
                    onChange={(e) => updateMeta("paymentDays", parseInt(e.target.value, 10) || 0)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Пеня за просрочку, %</label>
                  <Input
                    className="h-9"
                    type="number"
                    step="0.1"
                    value={meta.drojsmalsranta}
                    onChange={(e) => updateMeta("drojsmalsranta", parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">НДС %</label>
                  <Input
                    className="h-9"
                    type="number"
                    step="0.1"
                    value={meta.momsrate}
                    onChange={(e) => updateMeta("momsrate", parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Заказчик
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Имя</label>
                  <Input
                    className="h-9"
                    value={meta.custName}
                    onChange={(e) => updateMeta("custName", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Компания</label>
                  <Input
                    className="h-9"
                    value={meta.custCompany}
                    onChange={(e) => updateMeta("custCompany", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Телефон</label>
                  <Input
                    className="h-9"
                    value={meta.custPhone}
                    onChange={(e) => updateMeta("custPhone", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Адрес</label>
                  <Input
                    className="h-9"
                    value={meta.custAddress}
                    onChange={(e) => updateMeta("custAddress", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                  <label className="text-xs text-muted-foreground">Эл. почта</label>
                  <Input
                    className="h-9"
                    value={meta.custEmail}
                    onChange={(e) => updateMeta("custEmail", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Позиции
              </CardTitle>
            </CardHeader>
            <CardContent>
              {items.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">Добавьте первую позицию.</p>
              )}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-muted-foreground border-b">
                      <th className="py-1.5 pr-2 font-medium">Наименование</th>
                      <th className="py-1.5 pr-2 font-medium text-right">Кол-во</th>
                      <th className="py-1.5 pr-2 font-medium text-right">Цена за ед.</th>
                      <th className="py-1.5 pr-2 font-medium text-right">Сумма</th>
                      <th className="py-1.5"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((it, i) => {
                      const sum = (Number(it.antal) || 0) * (Number(it.apris) || 0);
                      return (
                        <tr key={i} className="border-b last:border-0">
                          <td className="py-1 pr-2">
                            <Input
                              className="h-8"
                              value={it.benamning}
                              onChange={(e) => updateItem(i, "benamning", e.target.value)}
                            />
                          </td>
                          <td className="py-1 pr-2">
                            <Input
                              className="h-8 w-20 text-right"
                              type="number"
                              step="0.5"
                              value={it.antal}
                              onChange={(e) => updateItem(i, "antal", e.target.value)}
                            />
                          </td>
                          <td className="py-1 pr-2">
                            <Input
                              className="h-8 w-24 text-right"
                              type="number"
                              step="0.01"
                              value={it.apris}
                              onChange={(e) => updateItem(i, "apris", e.target.value)}
                            />
                          </td>
                          <td className="py-1 pr-2 text-right tabular-nums">{fmt(sum)}</td>
                          <td className="py-1">
                            <Button variant="ghost" size="sm" onClick={() => removeItem(i)}>
                              ✕
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <Button variant="secondary" size="sm" className="mt-3" onClick={addItem}>
                + Добавить строку
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Продавец — фиксировано
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="seller-frozen">
                <div>
                  <span className="k">Имя</span>
                  <span className="v">{SELLER.sellerName}</span>
                </div>
                <div>
                  <span className="k">Адрес</span>
                  <span className="v">
                    {SELLER.sellerStreet}, {SELLER.sellerPostal}
                  </span>
                </div>
                <div>
                  <span className="k">Bankgiro</span>
                  <span className="v">{SELLER.sellerBankgiro}</span>
                </div>
                <div>
                  <span className="k">Орг. номер</span>
                  <span className="v">{SELLER.sellerOrgnr}</span>
                </div>
                <div>
                  <span className="k">Номер НДС</span>
                  <span className="v">{SELLER.sellerVatnr}</span>
                </div>
                <div>
                  <span className="k">Одобрен для F-skatt</span>
                  <span className="v">{SELLER.sellerFskatt}</span>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground mt-2.5 leading-snug">
                Эти реквизиты продавца зафиксированы в коде инструмента и не редактируются через интерфейс — правьте
                константу SELLER в файле, если реквизиты изменятся.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="min-w-0">
          <div className="flex justify-end mb-3">
            <Button onClick={generatePDF}>Скачать PDF</Button>
          </div>
          <div className="invoice-wrap">
            <div className="invoice">
              <div className="inv-header">
                <img src={LOGO_URL} alt="logo" />
                <div className="inv-title">Faktura</div>
              </div>

              <div className="inv-meta-row">
                <div className="inv-meta-left">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="lbl">Fakturanummer</div>
                          <div className="val">{meta.fakturanummer}</div>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="lbl">Fakturadatum</div>
                          <div className="val">{meta.fakturadatum}</div>
                        </td>
                        <td>
                          <div className="lbl">Leveransdatum</div>
                          <div className="val">{meta.leveransdatum}</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="lbl">Betalningsvillkor</div>
                          <div className="val">{betalningsvillkor}</div>
                        </td>
                        <td>
                          <div className="lbl">Förfallodatum</div>
                          <div className="val">{forfallodatum}</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="lbl">Dröjsmålsränta</div>
                          <div className="val">{fmt(meta.drojsmalsranta)} %</div>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="inv-address-box">
                  <div className="hdr">Fakturaadress</div>
                  <div className="line">{meta.custName}</div>
                  {meta.custCompany && <div className="line">{meta.custCompany}</div>}
                  <div className="line">{meta.custPhone}</div>
                  <div className="line">{meta.custAddress}</div>
                  <div className="line">{meta.custEmail}</div>
                </div>
              </div>

              <table className="inv-items">
                <thead>
                  <tr>
                    <th>Benämning</th>
                    <th className="num">Antal, timmar</th>
                    <th className="num">À-pris</th>
                    <th className="num">Summa</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((it, i) => (
                    <tr key={i}>
                      <td>{it.benamning}</td>
                      <td className="num">{fmt(it.antal)}</td>
                      <td className="num">{fmt(it.apris)} kr</td>
                      <td className="num">{fmt((Number(it.antal) || 0) * (Number(it.apris) || 0))} kr</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="inv-totals-row">
                <div className="inv-qr-block">
                  {qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      style={{ width: "26mm", height: "26mm", display: "block" }}
                      alt="QR-kod för betalning"
                    />
                  ) : (
                    <div
                      style={{
                        width: "26mm",
                        height: "26mm",
                        border: "1px dashed #ccc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "7pt",
                        color: "#999",
                      }}
                    >
                      QR
                    </div>
                  )}
                  <div style={{ fontSize: "7pt", color: "#666", marginTop: "1mm", maxWidth: "26mm" }}>
                    Skanna för att betala
                  </div>
                </div>
                <div className="inv-totals-block">
                  <table className="inv-summary-table">
                    <thead>
                      <tr>
                        <th>Netto</th>
                        <th>Exkl moms</th>
                        <th>Moms %</th>
                        <th>Moms</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{fmt(netto)} kr</td>
                        <td>{fmt(exklMoms)} kr</td>
                        <td>{fmt(meta.momsrate)} %</td>
                        <td>{fmt(moms)} kr</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="inv-total-box">
                    <span className="lbl">ATT BETALA</span>
                    <span className="val">{fmt(attBetala)} kr</span>
                  </div>
                </div>
              </div>

              <div className="inv-footer">
                <div className="col">
                  <div className="hdr">Adress</div>
                  <div className="line">{SELLER.sellerAddrName}</div>
                  <div className="line">{SELLER.sellerStreet}</div>
                  <div className="line">{SELLER.sellerPostal}</div>
                </div>
                <div className="col">
                  <div className="ref">Referensnummer: {meta.fakturanummer}</div>
                  <div className="line">
                    <strong>Bankgiro</strong> {SELLER.sellerBankgiro}
                  </div>
                  <div className="line">
                    <strong>Organisationsnr</strong> {SELLER.sellerOrgnr}
                  </div>
                  <div className="line">
                    <strong>Momsreg.nr</strong> {SELLER.sellerVatnr}
                  </div>
                  <div className="line">
                    <strong>Godkänd för F-skatt</strong> {SELLER.sellerFskatt}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faktura;
