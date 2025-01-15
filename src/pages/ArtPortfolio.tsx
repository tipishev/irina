import { Portfolio } from "@/components/Portfolio";

type Language = 'ru' | 'en' | 'sv';

interface ArtPortfolioProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const artCategories = [
  {
    id: "paintings",
    name: {
      ru: "Картины",
      en: "Paintings",
      sv: "Målningar"
    },
    description: {
      ru: "Коллекция картин маслом и акрилом",
      en: "Collection of oil and acrylic paintings",
      sv: "Samling av olje- och akrylmålningar"
    },
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "drawings",
    name: {
      ru: "Рисунки",
      en: "Drawings",
      sv: "Teckningar"
    },
    description: {
      ru: "Карандашные и угольные рисунки",
      en: "Pencil and charcoal drawings",
      sv: "Blyerts- och kolteckningar"
    },
    images: ["/placeholder.svg", "/placeholder.svg"]
  }
];

const ArtPortfolio = ({ currentLang, onLanguageChange }: ArtPortfolioProps) => {
  return (
    <Portfolio 
      title={{
        ru: "Художественное портфолио",
        en: "Art Portfolio",
        sv: "Konstportfölj"
      }}
      categories={artCategories}
      currentLang={currentLang}
      onLanguageChange={onLanguageChange}
    />
  );
};

export default ArtPortfolio;