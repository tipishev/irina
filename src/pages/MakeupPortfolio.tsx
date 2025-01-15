import { Portfolio } from "@/components/Portfolio";

type Language = 'ru' | 'en' | 'sv';

interface MakeupPortfolioProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const MakeupPortfolio = ({ currentLang }: MakeupPortfolioProps) => {
  return (
    <div className="min-h-screen">
      <Portfolio currentLang={currentLang} category="makeup" />
    </div>
  );
};

export default MakeupPortfolio;