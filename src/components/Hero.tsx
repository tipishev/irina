import { LanguageSelector } from './LanguageSelector';
import { Phone } from 'lucide-react';

type Language = 'ru' | 'en' | 'sv';

const translations = {
  ru: {
    title: "Художественная Школа",
    subtitle: "Давайте создадим шедевр вместе!",
    address: "Stopvägen 38, 168 35 Bromma, Stockholm"
  },
  en: {
    title: "Art Studio",
    subtitle: "Let's create a masterpiece together!",
    address: "Stopvägen 38, 168 35 Bromma, Stockholm"
  },
  sv: {
    title: "Konststudio",
    subtitle: "Låt oss skapa ett mästerverk tillsammans!",
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
      className="relative bg-cover bg-center border-b-2 border-primary"
      style={{
        backgroundImage: 'url("/lovable-uploads/2ae5d0d8-61a3-4788-96c3-7b85618138c7.png")'
      }}
    >
      <div className="absolute inset-0 bg-white/80" />
      <div className="relative z-10 container mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
        <img
          src="/lovable-uploads/logo-Irina-Zay.png"
          alt="Irina Zay Art Studio Logo"
          className="h-16 w-16 sm:h-20 sm:w-20 object-contain shrink-0"
        />
        <div className="flex flex-col items-center sm:items-start gap-0.5">
          <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight">
            Irina Zay
          </h1>
          <h2 className="text-base md:text-lg text-secondary/90 leading-snug">
            {translations[currentLang].title}
          </h2>
          <p className="text-sm text-secondary/75 leading-snug">
            {translations[currentLang].subtitle}
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <p className="text-base font-medium">
            <a
              href="tel:073-517-3330"
              className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              073-517-3330 <Phone className="w-4 h-4" />
            </a>
          </p>
          <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </div>
  );
};
