import { Portfolio } from "@/components/Portfolio";

const categories = [
  {
    id: "wedding",
    name: {
      ru: "Свадебная",
      en: "Wedding",
      sv: "Bröllop"
    },
    description: {
      ru: "Запечатлите самые важные моменты вашего особенного дня",
      en: "Capture the most important moments of your special day",
      sv: "Fånga de viktigaste ögonblicken av din speciella dag"
    },
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
    ]
  },
  {
    id: "fashion",
    name: {
      ru: "Мода",
      en: "Fashion",
      sv: "Mode"
    },
    description: {
      ru: "Профессиональные фотосессии для модных проектов",
      en: "Professional photoshoots for fashion projects",
      sv: "Professionella fotograferingar för modeprojekt"
    },
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae"
    ]
  },
  {
    id: "business",
    name: {
      ru: "Деловой портрет",
      en: "Business Portrait",
      sv: "Företagsporträtt"
    },
    description: {
      ru: "Профессиональные портреты для вашего бизнеса",
      en: "Professional portraits for your business",
      sv: "Professionella porträtt för ditt företag"
    },
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    ]
  }
];

const title = {
  ru: "Фотография",
  en: "Photography Portfolio",
  sv: "Fotografi Portfolio"
};

const PhotographyPortfolio = () => {
  return <Portfolio title={title} categories={categories} />;
};

export default PhotographyPortfolio;