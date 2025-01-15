import { Portfolio } from "@/components/Portfolio";

type Language = 'ru' | 'en' | 'sv';

interface PhotographyPortfolioProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const photographyCategories = [
  {
    id: "portrait",
    name: {
      ru: "Портреты",
      en: "Portraits",
      sv: "Porträtt"
    },
    description: {
      ru: "Профессиональные портретные фотографии",
      en: "Professional portrait photography",
      sv: "Professionell porträttfotografi"
    },
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "landscape",
    name: {
      ru: "Пейзажи",
      en: "Landscapes",
      sv: "Landskap"
    },
    description: {
      ru: "Природные и городские пейзажи",
      en: "Natural and urban landscapes",
      sv: "Natur- och stadslandskap"
    },
    images: ["/placeholder.svg", "/placeholder.svg"]
  }
];

const PhotographyPortfolio = ({ currentLang, onLanguageChange }: PhotographyPortfolioProps) => {
  return (
    <Portfolio 
      title={{
        ru: "Фотографическое портфолио",
        en: "Photography Portfolio",
        sv: "Fotografiportfölj"
      }}
      categories={photographyCategories}
      currentLang={currentLang}
      onLanguageChange={onLanguageChange}
    />
  );
};

export default PhotographyPortfolio;