import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Schedule } from "@/components/Schedule";
import { useState } from "react";

type Language = 'ru' | 'en' | 'sv';

const messageOfTheDay = {
  ru: "Добро пожаловать! Сегодня отличный день для творчества!",
  en: "Welcome! Today is a great day for creativity!",
  sv: "Välkommen! Idag är en bra dag för kreativitet!"
};

const Index = () => {
  const [currentLang, setCurrentLang] = useState<Language>('ru');

  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <div className="container mx-auto px-4 py-6">
        <p className="text-xl text-center text-primary italic mb-12">
          {messageOfTheDay[currentLang]}
        </p>
      </div>
      <Services currentLang={currentLang} />
      <Schedule currentLang={currentLang} />
    </div>
  );
};

export default Index;