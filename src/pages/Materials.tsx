import { useEffect, useRef, useState } from "react";
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

const Materials = ({ currentLang, onLanguageChange }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const materialsHtml = contentByLang[currentLang];

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
