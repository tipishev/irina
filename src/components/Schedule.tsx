import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const translations = {
  ru: {
    title: "Расписание и стоимость",
    groups: {
      preschool: {
        title: "🎨 Дошколята (5-6 лет)",
        schedule: ["Вторник 16:00", "Среда 17:00"],
        duration: "Продолжительность занятия: 1 час",
        price: "Цена абонемента: 2000 крон (10 уроков)"
      },
      school: {
        title: "🎨 Школьники (7-9 лет)",
        schedule: ["Понедельник 17:00", "Вторник 17:00"],
        duration: "Продолжительность занятия: 1,5 часа",
        price: "Цена абонемента: 2300 крон (10 уроков)"
      },
      teens: {
        title: "🎨 Подростки (10-15 лет)",
        schedule: ["Среда 15:00", "Четверг 15:00 и 17:00"],
        duration: "Продолжительность занятия: 1,5 часа",
        price: "Цена абонемента: 2300 крон (10 уроков)"
      }
    },
    additional: {
      title: "Дополнительно",
      dropIn: "Разовое занятие (Drop-in): 250 крон (по записи, при наличии мест)",
      trial: "Пробный урок (1 час): 150 крон",
      discount: "Скидка: 10% при записи двух детей из одной семьи"
    }
  },
  en: {
    title: "Schedule and Prices",
    groups: {
      preschool: {
        title: "🎨 Preschool (5-6 years)",
        schedule: ["Tuesday 16:00", "Wednesday 17:00"],
        duration: "Lesson duration: 1 hour",
        price: "Subscription price: 2000 kr (10 lessons)"
      },
      school: {
        title: "🎨 School children (7-9 years)",
        schedule: ["Monday 17:00", "Tuesday 17:00"],
        duration: "Lesson duration: 1.5 hours",
        price: "Subscription price: 2300 kr (10 lessons)"
      },
      teens: {
        title: "🎨 Teenagers (10-15 years)",
        schedule: ["Wednesday 15:00", "Thursday 15:00 and 17:00"],
        duration: "Lesson duration: 1.5 hours",
        price: "Subscription price: 2300 kr (10 lessons)"
      }
    },
    additional: {
      title: "Additional Information",
      dropIn: "Single lesson (Drop-in): 250 kr (by appointment, subject to availability)",
      trial: "Trial lesson (1 hour): 150 kr",
      discount: "Discount: 10% when enrolling two children from the same family"
    }
  },
  sv: {
    title: "Schema och priser",
    groups: {
      preschool: {
        title: "🎨 Förskola (5-6 år)",
        schedule: ["Tisdag 16:00", "Onsdag 17:00"],
        duration: "Lektionslängd: 1 timme",
        price: "Prenumerationspris: 2000 kr (10 lektioner)"
      },
      school: {
        title: "🎨 Skolbarn (7-9 år)",
        schedule: ["Måndag 17:00", "Tisdag 17:00"],
        duration: "Lektionslängd: 1,5 timmar",
        price: "Prenumerationspris: 2300 kr (10 lektioner)"
      },
      teens: {
        title: "🎨 Tonåringar (10-15 år)",
        schedule: ["Onsdag 15:00", "Torsdag 15:00 och 17:00"],
        duration: "Lektionslängd: 1,5 timmar",
        price: "Prenumerationspris: 2300 kr (10 lektioner)"
      }
    },
    additional: {
      title: "Ytterligare information",
      dropIn: "Enstaka lektion (Drop-in): 250 kr (efter bokning, i mån av plats)",
      trial: "Provlektion (1 timme): 150 kr",
      discount: "Rabatt: 10% vid inskrivning av två barn från samma familj"
    }
  }
};

type Language = 'ru' | 'en' | 'sv';

interface ScheduleProps {
  currentLang: Language;
}

export const Schedule = ({ currentLang }: ScheduleProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          {translations[currentLang].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(translations[currentLang].groups).map((group, index) => (
            <Card key={index} className="fade-in">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    {group.schedule.map((time, idx) => (
                      <p key={idx} className="text-secondary">{time}</p>
                    ))}
                  </div>
                  <p className="text-secondary/80">{group.duration}</p>
                  <p className="text-secondary font-medium">{group.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-8 fade-in">
          <CardHeader>
            <CardTitle className="text-xl text-primary">
              {translations[currentLang].additional.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-secondary">{translations[currentLang].additional.dropIn}</p>
              <p className="text-secondary">{translations[currentLang].additional.trial}</p>
              <p className="text-secondary font-medium">{translations[currentLang].additional.discount}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};