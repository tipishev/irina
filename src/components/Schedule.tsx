import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const translations = {
  ru: {
    title: "Расписание и возрастные группы",
    groups: {
      littleOnes: {
        title: "👶 Малыши (6–7 лет)",
        schedule: ["Понедельник – 17:00", "Вторник – 15:00"],
        duration: "Продолжительность занятий: 1,5 часа",
        price: "Абонемент (10 занятий): 2300 крон"
      },
      school: {
        title: "👧🧒 Школьники (8–10 лет)",
        schedule: ["Вторник – 17:00", "Среда – 17:00"],
        duration: "Продолжительность занятий: 1,5 часа",
        price: "Абонемент (10 занятий): 2300 крон"
      },
      family: {
        title: "👨‍👩‍👧‍👦 Семейная группа (сиблинги, 6–10 лет)",
        schedule: ["Понедельник – 17:00", "Четверг – 15:00"],
        duration: "Продолжительность занятий: 1,5 часа",
        price: "Абонемент (10 занятий): 2300 крон"
      },
      teens: {
        title: "🧑‍🎨 Подростки (10–16 лет)",
        schedule: ["Среда – 15:00", "Четверг – 17:00"],
        duration: "Продолжительность занятий: 1,5 часа",
        price: "Абонемент (10 занятий): 2300 крон"
      }
    },
    additional: {
      title: "Дополнительные возможности",
      dropIn: "🔹 Разовое занятие (по записи, при наличии мест): 250 крон",
      trial: "🔹 Пробный урок (1 час): 150 крон",
      discount: "🔹 Семейная скидка: 10% при записи двух детей из одной семьи"
    }
  },
  en: {
    title: "Schedule and Age Groups",
    groups: {
      littleOnes: {
        title: "👶 Little Ones (6–7 years)",
        schedule: ["Monday – 17:00", "Tuesday – 15:00"],
        duration: "Lesson duration: 1.5 hours",
        price: "Subscription (10 lessons): 2300 kr"
      },
      school: {
        title: "👧🧒 School Children (8–10 years)",
        schedule: ["Tuesday – 17:00", "Wednesday – 17:00"],
        duration: "Lesson duration: 1.5 hours",
        price: "Subscription (10 lessons): 2300 kr"
      },
      family: {
        title: "👨‍👩‍👧‍👦 Family Group (siblings, 6–10 years)",
        schedule: ["Monday – 17:00", "Thursday – 15:00"],
        duration: "Lesson duration: 1.5 hours",
        price: "Subscription (10 lessons): 2300 kr"
      },
      teens: {
        title: "🧑‍🎨 Teenagers (10–16 years)",
        schedule: ["Wednesday – 15:00", "Thursday – 17:00"],
        duration: "Lesson duration: 1.5 hours",
        price: "Subscription (10 lessons): 2300 kr"
      }
    },
    additional: {
      title: "Additional Options",
      dropIn: "🔹 Single lesson (by appointment, subject to availability): 250 kr",
      trial: "🔹 Trial lesson (1 hour): 150 kr",
      discount: "🔹 Family discount: 10% when enrolling two children from the same family"
    }
  },
  sv: {
    title: "Schema och åldersgrupper",
    groups: {
      littleOnes: {
        title: "👶 Småbarn (6–7 år)",
        schedule: ["Måndag – 17:00", "Tisdag – 15:00"],
        duration: "Lektionslängd: 1,5 timmar",
        price: "Prenumeration (10 lektioner): 2300 kr"
      },
      school: {
        title: "👧🧒 Skolbarn (8–10 år)",
        schedule: ["Tisdag – 17:00", "Onsdag – 17:00"],
        duration: "Lektionslängd: 1,5 timmar",
        price: "Prenumeration (10 lektioner): 2300 kr"
      },
      family: {
        title: "👨‍👩‍👧‍👦 Familjegrupp (syskon, 6–10 år)",
        schedule: ["Måndag – 17:00", "Torsdag – 15:00"],
        duration: "Lektionslängd: 1,5 timmar",
        price: "Prenumeration (10 lektioner): 2300 kr"
      },
      teens: {
        title: "🧑‍🎨 Tonåringar (10–16 år)",
        schedule: ["Onsdag – 15:00", "Torsdag – 17:00"],
        duration: "Lektionslängd: 1,5 timmar",
        price: "Prenumeration (10 lektioner): 2300 kr"
      }
    },
    additional: {
      title: "Ytterligare alternativ",
      dropIn: "🔹 Enstaka lektion (efter bokning, i mån av plats): 250 kr",
      trial: "🔹 Provlektion (1 timme): 150 kr",
      discount: "🔹 Familjerabatt: 10% vid inskrivning av två barn från samma familj"
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