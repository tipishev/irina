import { LanguageSelector } from './LanguageSelector';

type Language = 'ru' | 'en' | 'sv';

const translations = {
  ru: {
    title: "Художественная Школа",
    subtitle: "Давайте создадим шедевр!",
    contact: "Не пишите, звоните мне на 073-517-3330"
  },
  en: {
    title: "Art Studio",
    subtitle: "Let's create a masterpiece!",
    contact: "Don't message, call me at 073-517-3330"
  },
  sv: {
    title: "Konststudio",
    subtitle: "Låt oss skapa ett mästerverk!",
    contact: "Skriv inte, ring mig på 073-517-3330"
  }
};

interface HeroProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Hero = ({ currentLang, onLanguageChange }: HeroProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-background">
      <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
      <div className="absolute top-4 right-4">
        <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
      </div>
      <div className="text-center space-y-6 fade-in">
        <img 
          src="/lovable-uploads/02923936-d2ca-433e-89b5-cb827bb35ea0.png" 
          alt="Irina Zay Art Studio Logo" 
          className="w-32 h-32 mx-auto rounded-full border-4 border-primary"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-secondary">
          Irina Zay
        </h1>
        <h2 className="text-2xl md:text-3xl text-secondary/80">
          {translations[currentLang].title}
        </h2>
        <p className="text-xl text-secondary/60">
          {translations[currentLang].subtitle}
        </p>
        <p className="text-lg font-medium text-primary">
          {translations[currentLang].contact}
        </p>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-2 bg-primary" />
    </div>
  );
};