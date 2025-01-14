import { Portfolio } from "@/components/Portfolio";

type Language = 'ru' | 'en' | 'sv';

interface ArtPortfolioProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const categories = [
  {
    id: "paintings",
    name: {
      ru: "Живопись",
      en: "Paintings",
      sv: "Målningar"
    },
    description: {
      ru: "Коллекция оригинальных картин маслом и акрилом",
      en: "Collection of original oil and acrylic paintings",
      sv: "Samling av originalmålningar i olja och akryl"
    },
    images: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec"
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
      ru: "Графические работы карандашом и углем",
      en: "Graphite and charcoal artwork",
      sv: "Konstverk i grafit och kol"
    },
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      "https://images.unsplash.com/photo-1513364778565-d6cf2561e7f1",
      "https://images.unsplash.com/photo-1513364788649-e22c1aaec89e"
    ]
  },
  {
    id: "ceramics",
    name: {
      ru: "Керамика",
      en: "Ceramics",
      sv: "Keramik"
    },
    description: {
      ru: "Уникальные керамические изделия ручной работы",
      en: "Unique handcrafted ceramic pieces",
      sv: "Unika handgjorda keramikföremål"
    },
    images: [
      "https://images.unsplash.com/photo-1565193298357-c5b46b0ff2d8",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61",
      "https://images.unsplash.com/photo-1590422749897-47c47673ba0b"
    ]
  }
];

const title = {
  ru: "Художественное портфолио",
  en: "Art Portfolio",
  sv: "Konstportfolio"
};

const ArtPortfolio = ({ currentLang, onLanguageChange }: ArtPortfolioProps) => {
  return <Portfolio 
    title={title} 
    categories={categories} 
    currentLang={currentLang}
    onLanguageChange={onLanguageChange}
  />;
};

export default ArtPortfolio;
