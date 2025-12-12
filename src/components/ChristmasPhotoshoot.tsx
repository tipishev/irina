import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import christmasStudio1 from "@/assets/christmas-studio-1.jpg";
import christmasStudio2 from "@/assets/christmas-studio-2.jpg";

type Language = 'ru' | 'en' | 'sv';

interface ChristmasPhotoshootProps {
  currentLang: Language;
  showLink?: boolean;
}

const content = {
  ru: {
    title: "🎄 Новогодние фотосъёмки",
    description: "Студия готова для новогодних фотосъёмок!",
    availability: "Расписание доступных слотов:",
    moreDetails: "Подробнее"
  },
  en: {
    title: "🎄 Christmas Photoshoots",
    description: "The studio is ready for Christmas photoshoots!",
    availability: "Available time slots:",
    moreDetails: "More details"
  },
  sv: {
    title: "🎄 Julfotografering",
    description: "Studion är redo för julfotografering!",
    availability: "Tillgängliga tider:",
    moreDetails: "Mer information"
  }
};

// Portfolio images from the jul directory
const portfolioImages = [
  "/lovable-uploads/portfolio/photography/jul/jul-1.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-2.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-3.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-4.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-5.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-6.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-7.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-8.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-9.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-10.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-11.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-12.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-13.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-14.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-15.jpg",
  "/lovable-uploads/portfolio/photography/jul/jul-16.jpg",
];

// Studio setup images
const studioImages = [christmasStudio1, christmasStudio2];

export const ChristmasPhotoshoot = ({ currentLang, showLink = false }: ChristmasPhotoshootProps) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg shadow-lg p-8 border-2 border-red-200">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-red-700">
            {content[currentLang].title}
          </h3>
          <p className="text-xl font-semibold text-green-700">
            {content[currentLang].description}
          </p>
          
          {showLink && (
            <Link 
              to="/jul"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
            >
              {content[currentLang].moreDetails} →
            </Link>
          )}
        </div>

        {/* Portfolio carousel */}
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {portfolioImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div 
                    className="relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => setFullscreenImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Christmas photoshoot ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Studio setup images */}
        <div className="flex flex-col md:flex-row gap-4">
          {studioImages.map((image, index) => (
            <div key={index} className="w-full md:w-1/2">
              <img
                src={image}
                alt="Christmas studio setup"
                className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setFullscreenImage(image)}
              />
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-secondary/80 font-medium">
            {content[currentLang].availability}
          </p>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md border border-red-200">
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnkP2Dt2OZp8VIOEwmB9yn0GW03S8EB2t9SxhcoX7fn--CO5_rTlmGClUY2lQ_ggbW7v5Lzslfm4El/pubhtml?gid=0&single=true&widget=true&headers=false"
              title="Christmas photoshoot availability"
              width="100%"
              height="100%"
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      {/* Fullscreen dialog */}
      <Dialog open={!!fullscreenImage} onOpenChange={() => setFullscreenImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/90 border-none">
          <img
            src={fullscreenImage || ""}
            alt="Fullscreen view"
            className="w-full h-full object-contain max-h-[90vh]"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
