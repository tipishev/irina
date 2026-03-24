import { Hero } from "@/components/Hero";
import { ChristmasPhotoshoot } from "@/components/ChristmasPhotoshoot";

type Language = 'ru' | 'en' | 'sv';

interface JulProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const Jul = ({ currentLang, onLanguageChange }: JulProps) => {
  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={onLanguageChange} />
      <div className="container mx-auto px-4 py-12 text-center text-muted-foreground">
        {/* Uncomment in December to restore Christmas photoshoot announcements */}
        {/* <ChristmasPhotoshoot currentLang={currentLang} showLink={false} /> */}
        <p>🎄 Christmas photoshoots will be announced here in December!</p>
      </div>
    </div>
  );
};

export default Jul;
