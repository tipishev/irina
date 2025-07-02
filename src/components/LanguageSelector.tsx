
import { Button } from "@/components/ui/button";

type Language = 'ru' | 'en' | 'sv';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSelector = ({ currentLang, onLanguageChange }: Props) => {
  return (
    <div className="flex gap-2">
      <Button 
        variant={currentLang === 'sv' ? "default" : "outline"}
        onClick={() => onLanguageChange('sv')}
        className="text-sm"
      >
        SV
      </Button>
      <Button 
        variant={currentLang === 'en' ? "default" : "outline"}
        onClick={() => onLanguageChange('en')}
        className="text-sm"
      >
        EN
      </Button>
      <Button 
        variant={currentLang === 'ru' ? "default" : "outline"}
        onClick={() => onLanguageChange('ru')}
        className="text-sm"
      >
        RU
      </Button>
    </div>
  );
};
