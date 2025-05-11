
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
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${activeCategory.name[currentLang]} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
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
    </div>
  );
};
