import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

type Language = 'ru' | 'en' | 'sv';

interface IndexProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const springAnnouncement = {
  ru: {
    title: "Весна 2025 — Расписание занятий",
    schedule: {
      preschool: "Дошколята (5-6 лет):\nВторник 16:00\nСреда 17:00\nПродолжительность: 1 час\nЦена: 2000 крон (10 уроков)",
      school: "Школьники (7-9 лет):\nПонедельник 17:00\nВторник 17:00\nПродолжительность: 1,5 часа\nЦена: 2300 крон (10 уроков)",
      teens: "Подростки (10-15 лет):\nСреда 15:00\nЧетверг 15:00 и 17:00\nПродолжительность: 1,5 часа\nЦена: 2300 крон (10 уроков)",
      additional: "Разовое занятие: 250 крон\nПробный урок (1 час): 150 крон\nСкидка: 10% при записи двух детей"
    }
  },
  en: {
    title: "Spring 2025 — Class Schedule",
    schedule: {
      preschool: "Preschool (5-6 years):\nTuesday 16:00\nWednesday 17:00\nDuration: 1 hour\nPrice: 2000 kr (10 lessons)",
      school: "School (7-9 years):\nMonday 17:00\nTuesday 17:00\nDuration: 1.5 hours\nPrice: 2300 kr (10 lessons)",
      teens: "Teens (10-15 years):\nWednesday 15:00\nThursday 15:00 and 17:00\nDuration: 1.5 hours\nPrice: 2300 kr (10 lessons)",
      additional: "Drop-in class: 250 kr\nTrial lesson (1 hour): 150 kr\nDiscount: 10% for two children from the same family"
    }
  },
  sv: {
    title: "Våren 2025 — Klassschema",
    schedule: {
      preschool: "Förskola (5-6 år):\nTisdag 16:00\nOnsdag 17:00\nLängd: 1 timme\nPris: 2000 kr (10 lektioner)",
      school: "Skola (7-9 år):\nMåndag 17:00\nTisdag 17:00\nLängd: 1,5 timmar\nPris: 2300 kr (10 lektioner)",
      teens: "Tonåringar (10-15 år):\nOnsdag 15:00\nTorsdag 15:00 och 17:00\nLängd: 1,5 timmar\nPris: 2300 kr (10 lektioner)",
      additional: "Drop-in-klass: 250 kr\nProvlektion (1 timme): 150 kr\nRabatt: 10% för två barn från samma familj"
    }
  }
};

const Index = ({ currentLang, onLanguageChange }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={onLanguageChange} />
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
          <div className="w-full md:w-1/2">
            <img
              src="/lovable-uploads/3d5c7bb0-aa36-42ae-b1c8-6ab25d281a4a.png"
              alt="Spring 2025 Art Classes"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-secondary">
              {springAnnouncement[currentLang].title}
            </h2>
            <div className="space-y-4 text-secondary/80">
              <pre className="whitespace-pre-wrap font-sans">
                {springAnnouncement[currentLang].schedule.preschool}
              </pre>
              <pre className="whitespace-pre-wrap font-sans">
                {springAnnouncement[currentLang].schedule.school}
              </pre>
              <pre className="whitespace-pre-wrap font-sans">
                {springAnnouncement[currentLang].schedule.teens}
              </pre>
              <pre className="whitespace-pre-wrap font-sans">
                {springAnnouncement[currentLang].schedule.additional}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <Services currentLang={currentLang} />
    </div>
  );
};

export default Index;