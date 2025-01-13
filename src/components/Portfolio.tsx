import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { LanguageSelector } from "@/components/LanguageSelector";

interface Category {
  id: string;
  name: string;
  images: string[];
}

interface PortfolioProps {
  title: string;
  categories: Category[];
}

export const Portfolio = ({ title, categories }: PortfolioProps) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentLang, setCurrentLang] = useState<'ru' | 'en' | 'sv'>('ru');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            ← Back to Home
          </Link>
          <LanguageSelector 
            currentLang={currentLang} 
            onLanguageChange={setCurrentLang} 
          />
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-12">{title}</h1>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="mb-8">
            <CarouselContent>
              {activeCategory.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${activeCategory.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="flex justify-center gap-4">
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
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};