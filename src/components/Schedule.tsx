import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const translations = {
  ru: {
    title: "Расписание Занятий",
    groups: {
      beginners: "Начинающие",
      intermediate: "Продолжающие",
      advanced: "Продвинутые"
    },
    time: "Время",
    days: {
      monday: "Понедельник",
      tuesday: "Вторник",
      wednesday: "Среда",
      thursday: "Четверг"
    }
  },
  en: {
    title: "Class Schedule",
    groups: {
      beginners: "Beginners",
      intermediate: "Intermediate",
      advanced: "Advanced"
    },
    time: "Time",
    days: {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday"
    }
  },
  sv: {
    title: "Lektionsschema",
    groups: {
      beginners: "Nybörjare",
      intermediate: "Fortsättning",
      advanced: "Avancerad"
    },
    time: "Tid",
    days: {
      monday: "Måndag",
      tuesday: "Tisdag",
      wednesday: "Onsdag",
      thursday: "Torsdag"
    }
  }
};

const schedule = {
  monday: {
    beginners: "10:00 - 11:30",
    intermediate: "12:00 - 13:30",
    advanced: "14:00 - 15:30"
  },
  tuesday: {
    beginners: "15:00 - 16:30",
    intermediate: "17:00 - 18:30",
    advanced: "19:00 - 20:30"
  },
  wednesday: {
    beginners: "10:00 - 11:30",
    intermediate: "12:00 - 13:30",
    advanced: "14:00 - 15:30"
  },
  thursday: {
    beginners: "15:00 - 16:30",
    intermediate: "17:00 - 18:30",
    advanced: "19:00 - 20:30"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(translations[currentLang].days).map(([day, dayName]) => (
            <Card key={day} className="fade-in">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{dayName}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(translations[currentLang].groups).map(([group, groupName]) => (
                    <div key={group} className="flex justify-between items-center">
                      <span className="font-medium text-secondary">{groupName}</span>
                      <span className="text-secondary/60">{schedule[day as keyof typeof schedule][group as keyof typeof schedule.monday]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};