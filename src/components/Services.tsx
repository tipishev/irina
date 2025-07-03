
import { Palette, Camera, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';

const translations = {
  ru: {
    title: "Мои Услуги",
    services: [
      {
        title: "Художественные Классы",
        description: "Обучение рисунку, живописи и керамике для всех возрастов",
        icon: Palette,
        link: "/portfolio/art",
        rulesButton: "Правила студии",
        scheduleButton: "Расписание и стоимость",
        showPortfolio: true
      },
      {
        title: "Фотография",
        description: "Профессиональная фотосъемка и фотоуроки",
        icon: Camera,
        link: "/portfolio/photography",
        showPortfolio: false
      },
      {
        title: "Макияж",
        description: "Уроки макияжа и профессиональный мейкап",
        icon: Brush,
        link: "/portfolio/makeup",
        showPortfolio: true
      }
    ],
    viewPortfolio: "Смотреть портфолио"
  },
  en: {
    title: "My Services",
    services: [
      {
        title: "Art Classes",
        description: "Drawing, painting, and ceramics lessons for all ages",
        icon: Palette,
        link: "/portfolio/art",
        rulesButton: "Studio Rules",
        scheduleButton: "Schedule and Prices",
        showPortfolio: true
      },
      {
        title: "Photography",
        description: "Professional photography and photo lessons",
        icon: Camera,
        link: "/portfolio/photography",
        showPortfolio: false
      },
      {
        title: "Makeup",
        description: "Makeup lessons and professional makeup services",
        icon: Brush,
        link: "/portfolio/makeup",
        showPortfolio: true
      }
    ],
    viewPortfolio: "View Portfolio"
  },
  sv: {
    title: "Mina Tjänster",
    services: [
      {
        title: "Konstklasser",
        description: "Tecknings-, målnings- och keramiklektioner för alla åldrar",
        icon: Palette,
        link: "/portfolio/art",
        rulesButton: "Studioregler",
        scheduleButton: "Schema och priser",
        showPortfolio: true
      },
      {
        title: "Fotografi",
        description: "Professionell fotografering och fotolektioner",
        icon: Camera,
        link: "/portfolio/photography",
        showPortfolio: false
      },
      {
        title: "Makeup",
        description: "Makeuplektioner och professionella makeuptjänster",
        icon: Brush,
        link: "/portfolio/makeup",
        showPortfolio: true
      }
    ],
    viewPortfolio: "Visa Portfolio"
  }
};

type Language = 'ru' | 'en' | 'sv';

interface ServicesProps {
  currentLang: Language;
}

export const Services = ({ currentLang }: ServicesProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          {translations[currentLang].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translations[currentLang].services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border-2 border-primary hover:border-secondary transition-colors duration-300 fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-secondary">
                {service.title}
              </h3>
              <p className="text-secondary/60 mb-4">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.showPortfolio && (
                  <Link 
                    to={service.link}
                    className="inline-block w-full px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-center"
                  >
                    {translations[currentLang].viewPortfolio}
                  </Link>
                )}
                {service.scheduleButton && (
                  <Link 
                    to="/art-schedule"
                    className="inline-block w-full px-4 py-2 bg-white text-black border-2 border-black rounded hover:bg-gray-50 transition-colors text-center"
                  >
                    {service.scheduleButton}
                  </Link>
                )}
                {service.rulesButton && (
                  <Link 
                    to="/studio-rules"
                    className="inline-block w-full px-4 py-2 bg-white text-black border-2 border-black rounded hover:bg-gray-50 transition-colors text-center"
                  >
                    {service.rulesButton}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
