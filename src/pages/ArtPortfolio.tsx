import { Portfolio } from "@/components/Portfolio";

type Language = 'ru' | 'en' | 'sv';

interface ArtPortfolioProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const ArtPortfolio = ({ currentLang }: ArtPortfolioProps) => {
  return (
    <div className="min-h-screen">
      <Portfolio currentLang={currentLang} category="art" />
    </div>
  );
};

export default ArtPortfolio;