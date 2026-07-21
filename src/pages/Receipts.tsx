import { useRef, useState } from "react";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceConfig = Record<string, { spec: string; rate: number }>;

type Row = {
  id: number;
  nummer: number;
  name: string;
  phone: string;
  service: string;
  belopp: number;
  datum: string;
};

const DEFAULT_SERVICES: ServiceConfig = {
  "Обучение": { spec: "Konstundervisning barn och ungdomar", rate: 6 },
  "Фото": { spec: "Fotografering", rate: 25 },
  "Макияж": { spec: "Makeup", rate: 25 },
};

// ---------- CSV parsing ----------
function parseCSV(text: string): string[][] {
  const rowsOut: string[][] = [];
  let field = "";
  let row: string[] = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ",") {
        row.push(field);
        field = "";
      } else if (c === "\r") {
        // skip
      } else if (c === "\n") {
        row.push(field);
        rowsOut.push(row);
        row = [];
        field = "";
      } else field += c;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rowsOut.push(row);
  }
  return rowsOut.filter((r) => r.some((f) => f.trim() !== ""));
}

function titleCase(s: string): string {
  return s
    .split(" ")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(" ");
}

function formatName(raw: string): string {
  raw = raw.trim();
  const idx = raw.indexOf(",");
  if (idx !== -1) {
    const left = titleCase(raw.slice(0, idx).trim());
    const right = titleCase(raw.slice(idx + 1).trim());
    return `${left},${right}`;
  }
  return titleCase(raw);
}

function formatPhone(ref: string): string {
  const parts = ref.trim().split(/\s+/);
  return parts.length ? parts[parts.length - 1] : ref.trim();
}

function computeMoms(row: Row, serviceConfig: ServiceConfig) {
  const cfg = serviceConfig[row.service] || { spec: row.service, rate: 25 };
  const rateFrac = (cfg.rate || 0) / 100;
  const belopp = Number(row.belopp) || 0;
  const moms = (belopp * rateFrac) / (1 + rateFrac);
  return { cfg, belopp, moms };
}

// ---------- PDF generation (mirrors the printed Swedish Swish-kvitto template) ----------
function drawReceipt(
  doc: jsPDF,
  x: number,
  y: number,
  w: number,
  h: number,
  r: Row,
  cfg: { spec: string; rate: number },
  st: { orgnr: string; ort: string }
) {
  const { belopp, moms } = computeMoms(r, { [r.service]: cfg });
  doc.setLineWidth(0.2);
  doc.rect(x, y, w, h);

  const headerH = 16;
  const specH = 16;
  const rowH = 6;
  const kronorH = 8;
  const datumH = 6;
  const divX = x + w * 0.34;

  doc.line(x, y + headerH, x + w, y + headerH);
  doc.line(divX, y, divX, y + headerH);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("KVITTENS", x + 2, y + 6);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Nummer", x + 2, y + 13);
  doc.setFontSize(10);
  doc.text(String(r.nummer), x + 18, y + 13);
  doc.setFontSize(8);
  doc.text("Betalare", divX + 2, y + 4);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(r.name || "", divX + 3, y + 9);
  doc.text(r.phone || "", divX + 3, y + 14);

  let top = y + headerH;
  doc.line(x, top + specH, x + w, top + specH);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Specifikation", x + 2, top + 4);
  doc.setFont("courier", "normal");
  doc.setFontSize(10);
  doc.text(cfg.spec || "", x + 2, top + 9.5);

  top += specH;
  doc.line(x, top + rowH, x + w, top + rowH);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Momsreg.nr/org.nr", x + 2, top + 4.2);
  doc.setFont("courier", "normal");
  doc.setFontSize(10);
  doc.text(st.orgnr, x + 32, top + 4.3);

  top += rowH;
  doc.line(x, top + rowH, x + w, top + rowH);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(`Moms ingår med kr (${cfg.rate}%)`, x + 2, top + 4.2);
  doc.setFont("courier", "normal");
  doc.setFontSize(10);
  doc.text(`${moms.toFixed(2)} kr`, x + 42, top + 4.3);

  top += rowH;
  doc.line(x, top + kronorH, x + w, top + kronorH);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("KRONOR", x + 2, top + 5.5);
  doc.setFont("courier", "bold");
  doc.setFontSize(13);
  doc.text(`${belopp.toFixed(2)} kr`, x + 25, top + 5.8);

  top += kronorH;
  doc.line(x, top + datumH, x + w, top + datumH);
  const ortDiv = x + w * 0.55;
  doc.line(ortDiv, top, ortDiv, top + datumH);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Datum", x + 2, top + 4.2);
  doc.setFont("courier", "normal");
  doc.setFontSize(10);
  doc.text(r.datum || "", x + 16, top + 4.3);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Ort", ortDiv + 2, top + 4.2);
  doc.setFont("courier", "normal");
  doc.setFontSize(10);
  doc.text(st.ort, ortDiv + 10, top + 4.3);

  top += datumH;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const lineY = top + (y + h - top) / 2 - 1;
  doc.text("Underskrift", x + 2, lineY);
  doc.line(x + 22, lineY, x + w - 4, lineY);
}

const Receipts = () => {
  const [orgnr, setOrgnr] = useState("830524-6723");
  const [ort, setOrt] = useState("Stockholm");
  const [startNummer, setStartNummer] = useState(132);
  const [serviceConfig, setServiceConfig] = useState<ServiceConfig>(DEFAULT_SERVICES);
  const [rows, setRows] = useState<Row[]>([]);
  const [status, setStatus] = useState("Файл ещё не загружен.");
  const rowIdRef = useRef(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const serviceKeys = Object.keys(serviceConfig);

  function loadCSV(text: string) {
    const table = parseCSV(text);
    if (!table.length) return;
    const headers = table[0].map((h) => h.trim());
    const idx = (name: string) => headers.indexOf(name);
    const iDate = idx("Bokföringsdatum");
    const iRef = idx("Referens");
    const iBelopp = idx("Belopp");
    const iName = idx("имя");
    const iService = idx("услуга");

    let nummer = startNummer;
    const newRows: Row[] = [];
    const addedServices: string[] = [];
    const nextConfig = { ...serviceConfig };

    for (let r = 1; r < table.length; r++) {
      const line = table[r];
      if (!line || line.every((f) => f.trim() === "")) continue;
      const rawName = iName !== -1 ? line[iName] : "";
      const rawService = iService !== -1 ? line[iService].trim() : "";
      const rawRef = iRef !== -1 ? line[iRef] : "";
      const rawBelopp = iBelopp !== -1 ? line[iBelopp] : "0";
      const rawDate = iDate !== -1 ? line[iDate].trim() : "";

      if (rawService && !(rawService in nextConfig)) {
        nextConfig[rawService] = { spec: rawService, rate: 25 };
        addedServices.push(rawService);
      }

      newRows.push({
        id: rowIdRef.current++,
        nummer: nummer++,
        name: formatName(rawName || ""),
        phone: formatPhone(rawRef || ""),
        service: rawService || Object.keys(nextConfig)[0],
        belopp: parseFloat(rawBelopp) || 0,
        datum: rawDate,
      });
    }

    setServiceConfig(nextConfig);
    setRows(newRows);
    setStatus(
      `Загружено строк: ${newRows.length}.` +
        (addedServices.length
          ? ` Обнаружены новые услуги (установлен НДС 25%): ${addedServices.join(", ")} — при необходимости измените.`
          : "")
    );
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => loadCSV(reader.result as string);
    reader.readAsText(file, "UTF-8");
    e.target.value = "";
  }

  function updateRow(i: number, field: keyof Row, value: string) {
    setRows((prev) => {
      const next = [...prev];
      const row = { ...next[i] };
      if (field === "nummer") row.nummer = parseInt(value, 10) || 0;
      else if (field === "belopp") row.belopp = parseFloat(value) || 0;
      else (row as unknown as Record<string, string>)[field] = value;
      next[i] = row;
      return next;
    });
  }

  function removeRow(i: number) {
    setRows((prev) => prev.filter((_, idx) => idx !== i));
  }

  function addRow() {
    const nextNummer = rows.length ? Math.max(...rows.map((r) => r.nummer)) + 1 : startNummer;
    setRows((prev) => [
      ...prev,
      {
        id: rowIdRef.current++,
        nummer: nextNummer,
        name: "",
        phone: "",
        service: serviceKeys[0] ?? "",
        belopp: 0,
        datum: "",
      },
    ]);
  }

  function assignNumbers() {
    let n = startNummer;
    setRows((prev) => prev.map((r) => ({ ...r, nummer: n++ })));
  }

  function updateServiceField(key: string, field: "spec" | "rate", value: string) {
    setServiceConfig((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: field === "rate" ? parseFloat(value) || 0 : value,
      },
    }));
  }

  function renameServiceKey(oldKey: string, newKeyRaw: string) {
    const newKey = newKeyRaw.trim();
    if (!newKey || newKey === oldKey) return;
    if (newKey in serviceConfig) {
      alert("Такая услуга уже существует.");
      return;
    }
    setServiceConfig((prev) => {
      const next: ServiceConfig = {};
      Object.entries(prev).forEach(([k, v]) => {
        next[k === oldKey ? newKey : k] = v;
      });
      return next;
    });
    setRows((prev) => prev.map((r) => (r.service === oldKey ? { ...r, service: newKey } : r)));
  }

  function addService() {
    let base = "Новая услуга";
    let key = base;
    let n = 1;
    while (key in serviceConfig) key = `${base} ${++n}`;
    setServiceConfig((prev) => ({ ...prev, [key]: { spec: "", rate: 25 } }));
  }

  function removeService(key: string) {
    if (serviceKeys.length <= 1) {
      alert("Должна остаться хотя бы одна услуга.");
      return;
    }
    const fallback = serviceKeys.find((k) => k !== key) ?? "";
    setServiceConfig((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setRows((prev) => prev.map((r) => (r.service === key ? { ...r, service: fallback } : r)));
  }

  function generatePDF() {
    if (!rows.length) {
      alert("Нет квитанций для генерации. Загрузите CSV или добавьте строки.");
      return;
    }
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const pageMargin = 8;
    const gap = 2;
    const cellW = (210 - 2 * pageMargin - gap) / 2;
    const cellH = (297 - 2 * pageMargin - gap) / 2;
    const positions: [number, number][] = [
      [pageMargin, pageMargin],
      [pageMargin + cellW + gap, pageMargin],
      [pageMargin, pageMargin + cellH + gap],
      [pageMargin + cellW + gap, pageMargin + cellH + gap],
    ];

    rows.forEach((r, i) => {
      const slot = i % 4;
      if (slot === 0 && i !== 0) doc.addPage();
      const [x, y] = positions[slot];
      const cfg = serviceConfig[r.service] || { spec: r.service, rate: 25 };
      drawReceipt(doc, x, y, cellW, cellH, r, cfg, { orgnr, ort });
    });

    doc.save("Kvitton.pdf");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Генератор квитанций</h1>

      <div className="flex flex-wrap items-center gap-4 mb-6 p-4 rounded-lg border bg-card">
        <Button variant="secondary" onClick={() => fileInputRef.current?.click()}>
          Загрузить CSV
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
        />
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Орг. номер
          <Input className="w-32 h-9" value={orgnr} onChange={(e) => setOrgnr(e.target.value)} />
        </label>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Город
          <Input className="w-32 h-9" value={ort} onChange={(e) => setOrt(e.target.value)} />
        </label>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Начальный номер
          <Input
            className="w-24 h-9"
            type="number"
            value={startNummer}
            onChange={(e) => setStartNummer(parseInt(e.target.value, 10) || 1)}
          />
        </label>
        <Button variant="outline" onClick={assignNumbers}>
          Присвоить номера
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6 min-w-0">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Услуги и НДС
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-muted-foreground border-b">
                      <th className="py-1.5 pr-2 font-medium">Услуга (CSV)</th>
                      <th className="py-1.5 pr-2 font-medium">Описание (квитанция)</th>
                      <th className="py-1.5 pr-2 font-medium">НДС %</th>
                      <th className="py-1.5"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceKeys.map((key) => (
                      <tr key={key} className="border-b last:border-0">
                        <td className="py-1 pr-2">
                          <Input
                            className="h-8"
                            defaultValue={key}
                            onBlur={(e) => renameServiceKey(key, e.target.value)}
                          />
                        </td>
                        <td className="py-1 pr-2">
                          <Input
                            className="h-8"
                            value={serviceConfig[key].spec}
                            onChange={(e) => updateServiceField(key, "spec", e.target.value)}
                          />
                        </td>
                        <td className="py-1 pr-2">
                          <Input
                            className="h-8 w-16"
                            type="number"
                            step="0.1"
                            value={serviceConfig[key].rate}
                            onChange={(e) => updateServiceField(key, "rate", e.target.value)}
                          />
                        </td>
                        <td className="py-1">
                          <Button variant="ghost" size="sm" onClick={() => removeService(key)}>
                            ✕
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Button variant="secondary" size="sm" className="mt-3" onClick={addService}>
                + Добавить услугу
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Транзакции
              </CardTitle>
            </CardHeader>
            <CardContent>
              {rows.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Загрузите CSV или добавьте строку вручную.
                </p>
              ) : (
                <div className="overflow-x-auto max-h-[480px] overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="sticky top-0 bg-card">
                      <tr className="text-left text-xs text-muted-foreground border-b">
                        <th className="py-1.5 pr-2 font-medium">№</th>
                        <th className="py-1.5 pr-2 font-medium">Имя</th>
                        <th className="py-1.5 pr-2 font-medium">Телефон</th>
                        <th className="py-1.5 pr-2 font-medium">Услуга</th>
                        <th className="py-1.5 pr-2 font-medium">Сумма</th>
                        <th className="py-1.5 pr-2 font-medium">Дата</th>
                        <th className="py-1.5"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r, i) => (
                        <tr key={r.id} className="border-b last:border-0">
                          <td className="py-1 pr-2">
                            <Input
                              className="h-8 w-16"
                              value={r.nummer}
                              onChange={(e) => updateRow(i, "nummer", e.target.value)}
                            />
                          </td>
                          <td className="py-1 pr-2">
                            <Input
                              className="h-8 min-w-[160px]"
                              value={r.name}
                              onChange={(e) => updateRow(i, "name", e.target.value)}
                            />
                          </td>
                          <td className="py-1 pr-2">
                            <Input
                              className="h-8 min-w-[130px]"
                              value={r.phone}
                              onChange={(e) => updateRow(i, "phone", e.target.value)}
                            />
                          </td>
                          <td className="py-1 pr-2">
                            <select
                              className="h-8 w-full rounded-md border border-input bg-background px-2 text-sm"
                              value={r.service}
                              onChange={(e) => updateRow(i, "service", e.target.value)}
                            >
                              {serviceKeys.map((k) => (
                                <option key={k} value={k}>
                                  {k}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="py-1 pr-2">
                            <Input
                              className="h-8 w-20"
                              type="number"
                              step="0.01"
                              value={r.belopp}
                              onChange={(e) => updateRow(i, "belopp", e.target.value)}
                            />
                          </td>
                          <td className="py-1 pr-2">
                            <Input
                              className="h-8 w-36"
                              type="date"
                              value={r.datum}
                              onChange={(e) => updateRow(i, "datum", e.target.value)}
                            />
                          </td>
                          <td className="py-1">
                            <Button variant="ghost" size="sm" onClick={() => removeRow(i)}>
                              ✕
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <Button variant="secondary" size="sm" className="mt-3" onClick={addRow}>
                + Добавить строку
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Итоги
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              {rows.length === 0 ? (
                <p>Нет строк.</p>
              ) : (
                (() => {
                  const totals: Record<string, { belopp: number; moms: number; spec: string }> = {};
                  let grand = 0;
                  let grandMoms = 0;
                  rows.forEach((r) => {
                    const { cfg, belopp, moms } = computeMoms(r, serviceConfig);
                    if (!totals[r.service]) totals[r.service] = { belopp: 0, moms: 0, spec: cfg.spec };
                    totals[r.service].belopp += belopp;
                    totals[r.service].moms += moms;
                    grand += belopp;
                    grandMoms += moms;
                  });
                  return (
                    <div className="space-y-1">
                      {Object.entries(totals).map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span>
                            {k} ({v.spec})
                          </span>
                          <span>
                            {v.belopp.toFixed(2)} kr / НДС {v.moms.toFixed(2)} kr
                          </span>
                        </div>
                      ))}
                      <div className="flex justify-between font-semibold border-t pt-1 mt-1">
                        <span>Итого ({rows.length} квитанций)</span>
                        <span>
                          {grand.toFixed(2)} kr / НДС {grandMoms.toFixed(2)} kr
                        </span>
                      </div>
                    </div>
                  );
                })()
              )}
            </CardContent>
          </Card>
        </div>

        <div className="min-w-0">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">{status}</span>
            <Button onClick={generatePDF}>Скачать PDF</Button>
          </div>
          {rows.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-12 border rounded-lg">
              Предпросмотр появится здесь, когда будут данные.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[900px] overflow-y-auto pr-1">
              {rows.map((r) => {
                const { cfg, belopp, moms } = computeMoms(r, serviceConfig);
                return (
                  <div key={r.id} className="bg-white text-black border-[1.5px] border-black text-xs flex flex-col">
                    <div className="flex border-b border-black">
                      <div className="w-[34%] p-1.5 border-r border-black">
                        <div className="font-bold text-[15px]">KVITTENS</div>
                        <div className="text-[10px] text-gray-600 mt-1.5">Nummer</div>
                        <div className="text-[13px]">{r.nummer}</div>
                      </div>
                      <div className="flex-1 p-1.5">
                        <div className="text-[10px] text-gray-600">Betalare</div>
                        <div className="font-bold mt-0.5">{r.name || "—"}</div>
                        <div>{r.phone}</div>
                      </div>
                    </div>
                    <div className="p-1.5 border-b border-black min-h-[32px]">
                      <div className="text-[10px] text-gray-600">Specifikation</div>
                      <div className="font-mono text-[13px] mt-0.5">{cfg.spec}</div>
                    </div>
                    <div className="p-1.5 border-b border-black flex justify-between items-baseline">
                      <span className="text-[10px] text-gray-600">Momsreg.nr/org.nr</span>
                      <span className="font-mono text-[13px]">{orgnr}</span>
                    </div>
                    <div className="p-1.5 border-b border-black flex justify-between items-baseline">
                      <span className="text-[10px] text-gray-600">Moms ingår med kr ({cfg.rate}%)</span>
                      <span className="font-mono text-[13px]">{moms.toFixed(2)} kr</span>
                    </div>
                    <div className="p-1.5 border-b border-black flex justify-between items-baseline">
                      <span className="text-[10px] text-gray-600">KRONOR</span>
                      <span className="font-mono font-bold text-[16px]">{belopp.toFixed(2)} kr</span>
                    </div>
                    <div className="flex border-b border-black">
                      <div className="w-[55%] p-1.5">
                        <div className="text-[10px] text-gray-600">Datum</div>
                        <div className="font-mono text-[13px] mt-0.5">{r.datum}</div>
                      </div>
                      <div className="flex-1 p-1.5 border-l border-black">
                        <div className="text-[10px] text-gray-600">Ort</div>
                        <div className="font-mono text-[13px] mt-0.5">{ort}</div>
                      </div>
                    </div>
                    <div className="p-1.5 pt-3.5 text-[10px] text-gray-600 flex items-center gap-1.5">
                      Underskrift <span className="inline-block border-b border-black flex-1 h-px" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Receipts;
