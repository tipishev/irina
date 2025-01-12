import { useState } from 'react';
import { Button } from "@/components/ui/button";

type Language = 'ru' | 'en' | 'sv';

interface Props {
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSelector = ({ onLanguageChange }: Props) => {
  const [currentLang, setCurrentLang] = useState<Language>('ru');

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    onLanguageChange(lang);
  };

  return (
    <div className="flex gap-2">
      <Button 
        variant={currentLang === 'ru' ? "default" : "outline"}
        onClick={() => handleLanguageChange('ru')}
        className="text-sm"
      >
        RU
      </Button>
      <Button 
        variant={currentLang === 'en' ? "default" : "outline"}
        onClick={() => handleLanguageChange('en')}
        className="text-sm"
      >
        EN
      </Button>
      <Button 
        variant={currentLang === 'sv' ? "default" : "outline"}
        onClick={() => handleLanguageChange('sv')}
        className="text-sm"
      >
        SV
      </Button>
    </div>
  );
};