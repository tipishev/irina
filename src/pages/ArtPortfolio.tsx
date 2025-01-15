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
    images: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d"
    ]
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
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f"
    ]
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