import { Portfolio } from "@/components/Portfolio";

type Language = 'ru' | 'en' | 'sv';

interface MakeupPortfolioProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const makeupCategories = [
  {
    id: "bridal",
    name: {
      ru: "Свадебный макияж",
      en: "Bridal Makeup",
      sv: "Brudsmink"
    },
    description: {
      ru: "Профессиональный свадебный макияж",
      en: "Professional bridal makeup",
      sv: "Professionell brudsmink"
    },
    images: [
      "https://images.unsplash.com/photo-1457972729786-0411a3b2b626",
      "https://images.unsplash.com/photo-1457972729786-0411a3b2b626"
    ]
  },
  {
    id: "evening",
    name: {
      ru: "Вечерний макияж",
      en: "Evening Makeup",
      sv: "Kvällsmink"
    },
    description: {
      ru: "Вечерний и праздничный макияж",
      en: "Evening and special occasion makeup",
      sv: "Kväll- och festsmink"
    },
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
    ]
  }
];

const MakeupPortfolio = ({ currentLang, onLanguageChange }: MakeupPortfolioProps) => {
  return (
    <Portfolio 
      title={{
        ru: "Портфолио макияжа",
        en: "Makeup Portfolio",
        sv: "Sminkportfölj"
      }}
      categories={makeupCategories}
      currentLang={currentLang}
      onLanguageChange={onLanguageChange}
    />
  );
};

export default MakeupPortfolio;