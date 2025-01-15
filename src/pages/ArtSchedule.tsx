import { Schedule } from "@/components/Schedule";

type Language = 'ru' | 'en' | 'sv';

interface ArtScheduleProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const ArtSchedule = ({ currentLang, onLanguageChange }: ArtScheduleProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Schedule currentLang={currentLang} />
    </div>
  );
};

export default ArtSchedule;