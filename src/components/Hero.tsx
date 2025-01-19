import { LanguageSelector } from './LanguageSelector';
import { Phone } from 'lucide-react';

type Language = 'ru' | 'en' | 'sv';

const translations = {
  ru: {
    title: "Художественная Школа",
    subtitle: "Давайте создадим шедевр!",
    address: "Stopvägen 38, 168 35 Bromma, Stockholm"
  },
  en: {
    title: "Art Studio",
    subtitle: "Let's create a masterpiece!",
    address: "Stopvägen 38, 168 35 Bromma, Stockholm"
  },
  sv: {
    title: "Konststudio",
    subtitle: "Låt oss skapa ett mästerverk!",
    address: "Stopvägen 38, 168 35 Bromma, Stockholm"
  }
};

interface HeroProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Hero = ({ currentLang, onLanguageChange }: HeroProps) => {
  return (
    <div 
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/lovable-uploads/2ae5d0d8-61a3-4788-96c3-7b85618138c7.png")'
      }}
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
      <div className="absolute top-4 right-4">
        <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
      </div>
      <div className="text-center space-y-6 fade-in">
        <img 
          src="/lovable-uploads/cf4fd44e-ba36-4c37-86d9-77faf779f3c4.png" 
          alt="Irina Zay Art Studio Logo" 
          className="w-64 h-64 mx-auto object-contain"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Irina Zay
        </h1>
        <h2 className="text-2xl md:text-3xl text-white/90">
          {translations[currentLang].title}
        </h2>
        <p className="text-xl text-white/80">
          {translations[currentLang].subtitle}
        </p>
        <p className="text-lg font-medium">
          <a 
            href="tel:073-517-3330" 
            className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-1"
          >
            073-517-3330 <Phone className="w-4 h-4" />
          </a>
        </p>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-2 bg-primary" />
    </div>
  );
};