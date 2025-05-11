
import { Portfolio } from "@/components/Portfolio";

type Language = 'ru' | 'en' | 'sv';

interface ArtPortfolioProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

// Path to the images folder
const basePath = "/lovable-uploads/portfolio/kids_art";

// Define the art categories with all available images
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
      `${basePath}/painting/photo_5839212574300817639_y.jpg`,
      `${basePath}/painting/photo_5839212574300817644_y.jpg`,
      `${basePath}/painting/photo_5839212574300817647_y.jpg`,
      `${basePath}/painting/photo_5839212574300817649_y.jpg`,
      `${basePath}/painting/photo_5839212574300817651_y.jpg`,
      `${basePath}/painting/photo_5839212574300817652_y.jpg`,
      `${basePath}/painting/photo_5839212574300817654_y.jpg`,
      `${basePath}/painting/photo_5839212574300817655_y.jpg`,
      `${basePath}/painting/photo_5839212574300817658_y.jpg`,
      `${basePath}/painting/photo_5839212574300817662_y.jpg`,
      `${basePath}/painting/photo_5839212574300817676_y.jpg`,
      `${basePath}/painting/photo_5839212574300817677_y.jpg`,
      `${basePath}/painting/photo_5839212574300817678_y.jpg`,
      `${basePath}/painting/photo_5839212574300817680_y.jpg`,
      `${basePath}/painting/photo_5839212574300817682_y.jpg`,
      `${basePath}/painting/photo_5839212574300817690_y.jpg`,
      `${basePath}/painting/photo_5839212574300817691_y.jpg`,
      `${basePath}/painting/photo_5839212574300817696_y.jpg`,
      `${basePath}/painting/photo_5839212574300817697_y.jpg`,
      `${basePath}/painting/photo_5839212574300817701_y.jpg`,
      `${basePath}/painting/photo_5839212574300817707_y.jpg`
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
      `${basePath}/drawing/photo_5839212574300817671_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817672_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817688_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817689_y.jpg`
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
      `${basePath}/graphic/photo_5839212574300817650_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817657_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817659_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817660_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817661_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817670_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817703_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817706_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817708_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817709_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817710_y.jpg`
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
      `${basePath}/craft/photo_5839212574300817645_y.jpg`,
      `${basePath}/craft/photo_5839212574300817653_y.jpg`,
      `${basePath}/craft/photo_5839212574300817656_y.jpg`,
      `${basePath}/craft/photo_5839212574300817663_y.jpg`,
      `${basePath}/craft/photo_5839212574300817664_y.jpg`,
      `${basePath}/craft/photo_5839212574300817665_y.jpg`,
      `${basePath}/craft/photo_5839212574300817666_y.jpg`,
      `${basePath}/craft/photo_5839212574300817667_y.jpg`,
      `${basePath}/craft/photo_5839212574300817668_y.jpg`,
      `${basePath}/craft/photo_5839212574300817669_y.jpg`,
      `${basePath}/craft/photo_5839212574300817673_y.jpg`,
      `${basePath}/craft/photo_5839212574300817674_y.jpg`,
      `${basePath}/craft/photo_5839212574300817675_y.jpg`,
      `${basePath}/craft/photo_5839212574300817679_y.jpg`,
      `${basePath}/craft/photo_5839212574300817681_y.jpg`,
      `${basePath}/craft/photo_5839212574300817683_y.jpg`,
      `${basePath}/craft/photo_5839212574300817684_y.jpg`,
      `${basePath}/craft/photo_5839212574300817685_y.jpg`,
      `${basePath}/craft/photo_5839212574300817686_y.jpg`,
      `${basePath}/craft/photo_5839212574300817687_y.jpg`,
      `${basePath}/craft/photo_5839212574300817692_y.jpg`,
      `${basePath}/craft/photo_5839212574300817693_y.jpg`,
      `${basePath}/craft/photo_5839212574300817694_y.jpg`,
      `${basePath}/craft/photo_5839212574300817695_y.jpg`,
      `${basePath}/craft/photo_5839212574300817698_y.jpg`,
      `${basePath}/craft/photo_5839212574300817699_y.jpg`,
      `${basePath}/craft/photo_5839212574300817700_y.jpg`,
      `${basePath}/craft/photo_5839212574300817702_y.jpg`,
      `${basePath}/craft/photo_5839212574300817704_y.jpg`,
      `${basePath}/craft/photo_5839212574300817705_y.jpg`,
      `${basePath}/craft/photo_5839212574300817711_y.jpg`,
      `${basePath}/craft/photo_5839212574300817712_y.jpg`,
      `${basePath}/craft/photo_5839212574300817713_y.jpg`
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
