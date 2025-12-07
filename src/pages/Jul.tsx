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
      <div className="container mx-auto px-4 py-12">
        <ChristmasPhotoshoot currentLang={currentLang} showLink={false} />
      </div>
    </div>
  );
};

export default Jul;
