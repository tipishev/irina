import { Portfolio } from "@/components/Portfolio";

type Language = 'ru' | 'en' | 'sv';

interface MakeupPortfolioProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const categories = [
  {
    id: "bridal",
    name: {
      ru: "Свадебный",
      en: "Bridal",
      sv: "Brudmakeup"
    },
    description: {
      ru: "Безупречный макияж для вашего особенного дня",
      en: "Flawless makeup for your special day",
      sv: "Perfekt makeup för din speciella dag"
    },
    images: [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e",
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda",
      "https://images.unsplash.com/photo-1532487619239-47e7e6d6c549"
    ]
  },
  {
    id: "evening",
    name: {
      ru: "Вечерний",
      en: "Evening",
      sv: "Kvällsmakeup"
    },
    description: {
      ru: "Яркий и элегантный макияж для особых случаев",
      en: "Bold and elegant makeup for special occasions",
      sv: "Djärv och elegant makeup för speciella tillfällen"
    },
    images: [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
      "https://images.unsplash.com/photo-1526045478516-99145907023c",
      "https://images.unsplash.com/photo-1512257640574-7a89f477b3a5"
    ]
  },
  {
    id: "natural",
    name: {
      ru: "Натуральный",
      en: "Natural",
      sv: "Naturlig"
    },
    description: {
      ru: "Легкий и естественный макияж на каждый день",
      en: "Light and natural everyday makeup",
      sv: "Lätt och naturlig vardagsmakeup"
    },
    images: [
      "https://images.unsplash.com/photo-1503236823255-94609f598e71",
      "https://images.unsplash.com/photo-1522337094846-8a818192de1f",
      "https://images.unsplash.com/photo-1512331455279-c8ae8178f586"
    ]
  }
];

const title = {
  ru: "Портфолио визажиста",
  en: "Makeup Portfolio",
  sv: "Makeupportfolio"
};

const MakeupPortfolio = ({ currentLang, onLanguageChange }: MakeupPortfolioProps) => {
  return <Portfolio 
    title={title} 
    categories={categories} 
    currentLang={currentLang}
    onLanguageChange={onLanguageChange}
  />;
};

export default MakeupPortfolio;
