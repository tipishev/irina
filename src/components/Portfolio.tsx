
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { LanguageSelector } from './LanguageSelector';
import { ZoomIn, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Language = 'ru' | 'en' | 'sv';

interface Category {
  id: string;
  name: {
    ru: string;
    en: string;
    sv: string;
  };
  description: {
    ru: string;
    en: string;
    sv: string;
  };
  images: string[];
}

interface PortfolioProps {
  title: {
    ru: string;
    en: string;
    sv: string;
  };
  categories: Category[];
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Portfolio = ({ title, categories, currentLang, onLanguageChange }: PortfolioProps) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">{title[currentLang]}</h1>
          <LanguageSelector 
            currentLang={currentLang}
            onLanguageChange={onLanguageChange}
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="mb-8">
            <CarouselContent>
              {activeCategory.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative flex items-center justify-center">
                    <img
                      src={image}
                      alt={`${activeCategory.name[currentLang]} ${index + 1}`}
                      className="max-h-[70vh] max-w-full object-contain mx-auto"
                    />
                    <button 
                      className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      onClick={() => setFullscreenImage(image)}
                      aria-label="View full screen"
                    >
                      <ZoomIn size={18} />
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <p className="text-center text-muted-foreground mb-8">
            {activeCategory.description[currentLang]}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-lg transition-colors",
                  activeCategory.id === category.id
                    ? "bg-primary text-white"
                    : "bg-muted hover:bg-primary/10"
                )}
              >
                {category.name[currentLang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!fullscreenImage} onOpenChange={(open) => !open && setFullscreenImage(null)}>
        <DialogContent className="max-w-[95vw] h-[95vh] flex items-center justify-center p-0 bg-black border-none">
          <DialogClose className="absolute top-4 right-4 z-10 rounded-full bg-black/50 text-white p-2 hover:bg-white/20 transition-colors">
            <X size={24} />
          </DialogClose>
          <div className="w-full h-full flex items-center justify-center p-4">
            {fullscreenImage && (
              <img
                src={fullscreenImage}
                alt="Full screen view"
                className="max-h-full max-w-full object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
