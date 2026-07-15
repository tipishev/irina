import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import materialsRu from "@/content/materials.ru.html?raw";
import materialsEn from "@/content/materials.en.html?raw";
import materialsSv from "@/content/materials.sv.html?raw";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

type Language = "ru" | "en" | "sv";

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const contentByLang: Record<Language, string> = {
  ru: materialsRu,
  en: materialsEn,
  sv: materialsSv,
};

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    // strip emoji and symbols
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

const addHeadingAnchors = (html: string): string => {
  if (typeof window === "undefined") return html;
  const doc = new DOMParser().parseFromString(html, "text/html");
  const usedIds = new Set<string>();
  doc.querySelectorAll("h1, h2, h3, h4").forEach((h) => {
    const text = h.textContent || "";
    let base = slugify(text);
    if (!base) return;
    let id = base;
    let i = 2;
    while (usedIds.has(id)) {
      id = `${base}-${i++}`;
    }
    usedIds.add(id);
    h.id = id;
    h.classList.add("heading-anchor");
    const a = doc.createElement("a");
    a.href = `#${id}`;
    a.className = "anchor-link";
    a.setAttribute("aria-label", "Link to section");
    a.textContent = "#";
    h.insertBefore(a, h.firstChild);
  });
  return doc.body.innerHTML;
};

const Materials = ({ currentLang, onLanguageChange }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const location = useLocation();

  const materialsHtml = useMemo(
    () => addHeadingAnchors(contentByLang[currentLang]),
    [currentLang]
  );

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        e.preventDefault();
        setFullscreenImage((target as HTMLImageElement).src);
      }
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  // Scroll to hash after content renders / language changes
  useEffect(() => {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));
    // Wait for DOM to render
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(t);
  }, [location.hash, materialsHtml]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-end mb-6">
          <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
        </div>

        <article
          ref={contentRef}
          className="materials-content prose prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: materialsHtml }}
        />
      </div>

      <Dialog open={!!fullscreenImage} onOpenChange={(open) => !open && setFullscreenImage(null)}>
        <DialogContent className="max-w-[95vw] h-[95vh] flex items-center justify-center p-0 bg-black border-none">
          <DialogClose className="absolute top-4 right-4 z-10 rounded-full bg-black/50 text-white p-2 hover:bg-white/20 transition-colors">
            <X size={24} />
          </DialogClose>
          <div className="w-full h-full flex items-center justify-center p-4">
            {fullscreenImage && (
              <img src={fullscreenImage} alt="" className="max-h-full max-w-full object-contain" />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Materials;
