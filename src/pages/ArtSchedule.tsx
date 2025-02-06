import { Schedule } from "@/components/Schedule";
import { LanguageSelector } from "@/components/LanguageSelector";

type Language = 'ru' | 'en' | 'sv';

interface ArtScheduleProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const ArtSchedule = ({ currentLang, onLanguageChange }: ArtScheduleProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-8">
        <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
      </div>
      <Schedule currentLang={currentLang} />
    </div>
  );
};

export default ArtSchedule;