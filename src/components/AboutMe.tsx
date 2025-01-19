import React from 'react';

type Language = 'ru' | 'en' | 'sv';

const translations = {
  ru: {
    title: "Обо мне",
    content: "Я профессиональный художник с многолетним опытом преподавания. Моя страсть - помогать ученикам раскрывать их творческий потенциал через искусство."
  },
  en: {
    title: "About Me",
    content: "I am a professional artist with many years of teaching experience. My passion is helping students unlock their creative potential through art."
  },
  sv: {
    title: "Om mig",
    content: "Jag är en professionell konstnär med många års undervisningserfarenhet. Min passion är att hjälpa elever att låsa upp sin kreativa potential genom konst."
  }
};

interface AboutMeProps {
  currentLang: Language;
}

export const AboutMe = ({ currentLang }: AboutMeProps) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-secondary mb-6">
          {translations[currentLang].title}
        </h2>
        <p className="text-lg text-secondary/80 text-center">
          {translations[currentLang].content}
        </p>
      </div>
    </div>
  );
};