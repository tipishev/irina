
import { Portfolio } from "@/components/Portfolio";

type Language = 'ru' | 'en' | 'sv';

interface ArtPortfolioProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const artCategories = [
  {
    id: "painting",
    name: {
      ru: "Живопись",
      en: "Painting",
      sv: "Målning"
    },
    description: {
      ru: "Красочные работы маслом и акрилом",
      en: "Colorful works in oil and acrylic",
      sv: "Färgglada verk i olja och akryl"
    },
    images: [
      "/lovable-uploads/portfolio/kids_art/painting/1.jpg",
      "/lovable-uploads/portfolio/kids_art/painting/2.jpg",
      "/lovable-uploads/portfolio/kids_art/painting/3.jpg",
      "/lovable-uploads/portfolio/kids_art/painting/4.jpg"
    ]
  },
  {
    id: "drawing",
    name: {
      ru: "Рисунки",
      en: "Drawing",
      sv: "Teckning"
    },
    description: {
      ru: "Традиционные техники рисования карандашом и углем",
      en: "Traditional drawing techniques with pencil and charcoal",
      sv: "Traditionella teckningstekniker med penna och kol"
    },
    images: [
      "/lovable-uploads/portfolio/kids_art/drawing/1.jpg",
      "/lovable-uploads/portfolio/kids_art/drawing/2.jpg",
      "/lovable-uploads/portfolio/kids_art/drawing/3.jpg",
      "/lovable-uploads/portfolio/kids_art/drawing/4.jpg"
    ]
  },
  {
    id: "graphic",
    name: {
      ru: "Графика",
      en: "Graphic Art",
      sv: "Grafik"
    },
    description: {
      ru: "Разнообразные графические техники и стили",
      en: "Various graphic techniques and styles",
      sv: "Olika grafiska tekniker och stilar"
    },
    images: [
      "/lovable-uploads/portfolio/kids_art/graphic/1.jpg",
      "/lovable-uploads/portfolio/kids_art/graphic/2.jpg",
      "/lovable-uploads/portfolio/kids_art/graphic/3.jpg",
      "/lovable-uploads/portfolio/kids_art/graphic/4.jpg"
    ]
  },
  {
    id: "craft",
    name: {
      ru: "Ремесла",
      en: "Craft",
      sv: "Hantverk"
    },
    description: {
      ru: "Творческие поделки и ручная работа",
      en: "Creative handicrafts and handmade projects",
      sv: "Kreativa hantverk och handgjorda projekt"
    },
    images: [
      "/lovable-uploads/portfolio/kids_art/craft/1.jpg",
      "/lovable-uploads/portfolio/kids_art/craft/2.jpg",
      "/lovable-uploads/portfolio/kids_art/craft/3.jpg",
      "/lovable-uploads/portfolio/kids_art/craft/4.jpg"
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
