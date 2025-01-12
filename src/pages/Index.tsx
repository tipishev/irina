import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { useState } from "react";

type Language = 'ru' | 'en' | 'sv';

const Index = () => {
  const [currentLang, setCurrentLang] = useState<Language>('ru');

  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <Services currentLang={currentLang} />
    </div>
  );
};

export default Index;