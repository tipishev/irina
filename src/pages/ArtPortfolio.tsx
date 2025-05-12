
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
      `${basePath}/painting/photo_5839212574300817707_y.jpg`,
      `${basePath}/painting/photo_5839212574300817828_y.jpg`,
      `${basePath}/painting/photo_5839212574300817830_y.jpg`,
      `${basePath}/painting/photo_5839212574300817831_y.jpg`,
      `${basePath}/painting/photo_5839212574300817832_y.jpg`,
      `${basePath}/painting/photo_5839212574300817862_y.jpg`,
      `${basePath}/painting/photo_5839212574300817866_y.jpg`,
      `${basePath}/painting/photo_5839212574300817867_y.jpg`,
      `${basePath}/painting/photo_5839212574300817868_y.jpg`,
      `${basePath}/painting/photo_5839212574300817870_y.jpg`,
      `${basePath}/painting/photo_5839212574300817871_y.jpg`,
      `${basePath}/painting/photo_5839212574300817872_y.jpg`,
      `${basePath}/painting/photo_5839212574300817878_y.jpg`,
      `${basePath}/painting/photo_5839212574300817879_y.jpg`,
      `${basePath}/painting/photo_5839212574300817885_y.jpg`,
      `${basePath}/painting/photo_5839212574300817886_y.jpg`,
      `${basePath}/painting/photo_5839212574300817887_y.jpg`,
      `${basePath}/painting/photo_5839212574300817888_y.jpg`,
      `${basePath}/painting/photo_5839212574300817889_y.jpg`,
      `${basePath}/painting/photo_5839212574300817891_y.jpg`,
      `${basePath}/painting/photo_5839212574300817923_y.jpg`,
      `${basePath}/painting/photo_5839212574300817924_y.jpg`,
      `${basePath}/painting/photo_5839212574300817925_y.jpg`,
      `${basePath}/painting/photo_5839212574300817927_y.jpg`,
      `${basePath}/painting/photo_5839212574300817928_y.jpg`,
      `${basePath}/painting/photo_5839212574300817929_y.jpg`,
      `${basePath}/painting/photo_5839212574300817930_y.jpg`,
      `${basePath}/painting/photo_5839212574300817947_y.jpg`,
      `${basePath}/painting/photo_5839212574300817950_y.jpg`,
      `${basePath}/painting/photo_5839212574300817954_y.jpg`,
      `${basePath}/painting/photo_5839212574300817960_y.jpg`,
      `${basePath}/painting/photo_5839212574300817962_y.jpg`,
      `${basePath}/painting/photo_5839212574300817963_y.jpg`,
      `${basePath}/painting/photo_5839212574300817964_y.jpg`,
      `${basePath}/painting/photo_5839212574300817966_y.jpg`,
      `${basePath}/painting/photo_5839212574300817976_y.jpg`,
      `${basePath}/painting/photo_5839212574300817977_y.jpg`,
      `${basePath}/painting/photo_5839212574300817978_y.jpg`,
      `${basePath}/painting/photo_5839212574300817979_y.jpg`
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
      `${basePath}/drawing/photo_5839212574300817689_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817826_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817829_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817838_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817863_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817864_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817865_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817869_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817873_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817874_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817875_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817876_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817880_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817881_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817883_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817911_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817912_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817913_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817914_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817915_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817916_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817942_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817943_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817944_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817957_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817965_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817967_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817972_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817973_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817974_y.jpg`,
      `${basePath}/drawing/photo_5839212574300817975_y.jpg`
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
      `${basePath}/graphic/photo_5839212574300817710_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817824_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817835_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817836_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817837_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817884_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817907_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817933_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817934_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817970_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817982_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817983_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817984_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817985_y.jpg`,
      `${basePath}/graphic/photo_5839212574300817986_y.jpg`
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
      `${basePath}/craft/photo_5839212574300817713_y.jpg`,
      `${basePath}/craft/photo_5839212574300817839_y.jpg`,
      `${basePath}/craft/photo_5839212574300817848_y.jpg`,
      `${basePath}/craft/photo_5839212574300817859_y.jpg`,
      `${basePath}/craft/photo_5839212574300817860_y.jpg`,
      `${basePath}/craft/photo_5839212574300817861_y.jpg`,
      `${basePath}/craft/photo_5839212574300817890_y.jpg`,
      `${basePath}/craft/photo_5839212574300817893_y.jpg`,
      `${basePath}/craft/photo_5839212574300817894_y.jpg`,
      `${basePath}/craft/photo_5839212574300817895_y.jpg`,
      `${basePath}/craft/photo_5839212574300817896_y.jpg`,
      `${basePath}/craft/photo_5839212574300817897_y.jpg`,
      `${basePath}/craft/photo_5839212574300817898_y.jpg`,
      `${basePath}/craft/photo_5839212574300817899_y.jpg`,
      `${basePath}/craft/photo_5839212574300817900_y.jpg`,
      `${basePath}/craft/photo_5839212574300817901_y.jpg`,
      `${basePath}/craft/photo_5839212574300817902_y.jpg`,
      `${basePath}/craft/photo_5839212574300817903_y.jpg`,
      `${basePath}/craft/photo_5839212574300817904_y.jpg`,
      `${basePath}/craft/photo_5839212574300817905_y.jpg`,
      `${basePath}/craft/photo_5839212574300817919_y.jpg`,
      `${basePath}/craft/photo_5839212574300817920_y.jpg`,
      `${basePath}/craft/photo_5839212574300817921_y.jpg`,
      `${basePath}/craft/photo_5839212574300817922_y.jpg`,
      `${basePath}/craft/photo_5839212574300817931_y.jpg`,
      `${basePath}/craft/photo_5839212574300817932_y.jpg`,
      `${basePath}/craft/photo_5839212574300817935_y.jpg`,
      `${basePath}/craft/photo_5839212574300817936_y.jpg`,
      `${basePath}/craft/photo_5839212574300817937_y.jpg`,
      `${basePath}/craft/photo_5839212574300817938_y.jpg`,
      `${basePath}/craft/photo_5839212574300817939_y.jpg`,
      `${basePath}/craft/photo_5839212574300817946_y.jpg`,
      `${basePath}/craft/photo_5839212574300817948_y.jpg`,
      `${basePath}/craft/photo_5839212574300817949_y.jpg`,
      `${basePath}/craft/photo_5839212574300817952_y.jpg`,
      `${basePath}/craft/photo_5839212574300817953_y.jpg`,
      `${basePath}/craft/photo_5839212574300817955_y.jpg`,
      `${basePath}/craft/photo_5839212574300817956_y.jpg`,
      `${basePath}/craft/photo_5839212574300817959_y.jpg`,
      `${basePath}/craft/photo_5839212574300817961_y.jpg`,
      `${basePath}/craft/photo_5839212574300817968_y.jpg`,
      `${basePath}/craft/photo_5839212574300817969_y.jpg`,
      `${basePath}/craft/photo_5839212574300817971_y.jpg`,
      `${basePath}/craft/photo_5839212574300817980_y.jpg`
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
