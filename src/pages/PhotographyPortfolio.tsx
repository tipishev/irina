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
    images: [
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604",
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604"
    ]
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
    images: [
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e"
    ]
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