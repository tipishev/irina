import { Portfolio } from "@/components/Portfolio";

type Language = 'ru' | 'en' | 'sv';

interface PhotographyPortfolioProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const PhotographyPortfolio = ({ currentLang }: PhotographyPortfolioProps) => {
  return (
    <div className="min-h-screen">
      <Portfolio currentLang={currentLang} category="photography" />
    </div>
  );
};

export default PhotographyPortfolio;