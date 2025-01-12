import { Palette, Camera, Brush } from 'lucide-react';
import { useState } from 'react';

const translations = {
  ru: {
    title: "Наши Услуги",
    services: [
      {
        title: "Художественные Классы",
        description: "Обучение рисунку, живописи и керамике для всех возрастов",
        icon: Palette
      },
      {
        title: "Фотография",
        description: "Профессиональная фотосъемка и фотоуроки",
        icon: Camera
      },
      {
        title: "Макияж",
        description: "Уроки макияжа и профессиональный мейкап",
        icon: Brush
      }
    ]
  },
  en: {
    title: "Our Services",
    services: [
      {
        title: "Art Classes",
        description: "Drawing, painting, and ceramics lessons for all ages",
        icon: Palette
      },
      {
        title: "Photography",
        description: "Professional photography and photo lessons",
        icon: Camera
      },
      {
        title: "Makeup",
        description: "Makeup lessons and professional makeup services",
        icon: Brush
      }
    ]
  },
  sv: {
    title: "Våra Tjänster",
    services: [
      {
        title: "Konstklasser",
        description: "Tecknings-, målnings- och keramiklektioner för alla åldrar",
        icon: Palette
      },
      {
        title: "Fotografi",
        description: "Professionell fotografering och fotolektioner",
        icon: Camera
      },
      {
        title: "Makeup",
        description: "Makeuplektioner och professionella makeuptjänster",
        icon: Brush
      }
    ]
  }
};

type Language = 'ru' | 'en' | 'sv';

export const Services = () => {
  const [currentLang, setCurrentLang] = useState<Language>('ru');

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
              <p className="text-secondary/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};