import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

type Language = 'ru' | 'en' | 'sv';

interface IndexProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const aboutMe = {
  ru: {
    title: "Обо Мне",
    content: `Меня зовут Ирина. У меня за плечами двадцать лет опыта в индустрии красоты как фотографа и визажиста, а также многолетний опыт преподавания изобразительного искусства детям, подросткам и взрослым.

Я окончила художественную школу по направлению декоративно-прикладного искусства, архитектурную академию по специальности дизайн среды и малых архитектурных форм, а также Уральский государственный университет по специальности история.

В своей студии я объединяю профессионализм и креативность. Мы изучаем академический рисунок, декоративно-прикладное искусство и русскую культуру, делая акцент на культурных и исторических традициях. Я считаю, что перед тем как заниматься экспериментальным творчеством, важно освоить технику и основы.

Моя задача — научить детей технологиям и дать им инструменты, чтобы в будущем они могли творить самостоятельно. Я стремлюсь зажечь факел творчества, передать его детям и вдохновить их нести его дальше.

В студии я создаю сбалансированную атмосферу, где комфорт и творчество сочетаются с дисциплиной и структурированным подходом.`
  },
  en: {
    title: "About Me",
    content: `My name is Irina. I have twenty years of experience in the beauty industry as a photographer and makeup artist, as well as many years of experience teaching fine arts to children, teenagers, and adults.

I graduated from an art school specializing in decorative and applied arts, an architectural academy with a degree in environmental design and small architectural forms, and the Ural State University with a degree in history.

In my studio, I combine professionalism and creativity. We study academic drawing, decorative and applied arts, and Russian culture, emphasizing cultural and historical traditions. I believe that before engaging in experimental creativity, it's important to master technique and fundamentals.

My goal is to teach children technologies and give them tools so they can create independently in the future. I strive to light the torch of creativity, pass it on to children, and inspire them to carry it forward.

In the studio, I create a balanced atmosphere where comfort and creativity combine with discipline and a structured approach.`
  },
  sv: {
    title: "Om Mig",
    content: `Jag heter Irina. Jag har tjugo års erfarenhet inom skönhetsindustrin som fotograf och makeupartist, samt mångårig erfarenhet av att undervisa i konst för barn, tonåringar och vuxna.

Jag tog examen från en konstskola med inriktning mot dekorativ och tillämpad konst, en arkitekturakademi med examen i miljödesign och små arkitektoniska former, samt Urals statliga universitet med examen i historia.

I min studio kombinerar jag professionalism och kreativitet. Vi studerar akademisk teckning, dekorativ och tillämpad konst och rysk kultur, med betoning på kulturella och historiska traditioner. Jag tror att innan man ägnar sig åt experimentell kreativitet är det viktigt att behärska teknik och grunder.

Mitt mål är att lära barn tekniker och ge dem verktyg så att de kan skapa självständigt i framtiden. Jag strävar efter att tända kreativitetens fackla, föra den vidare till barn och inspirera dem att bära den framåt.

I studion skapar jag en balanserad atmosfär där komfort och kreativitet kombineras med disciplin och ett strukturerat tillvägagångssätt.`
  }
};

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
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-secondary">
              {aboutMe[currentLang].title}
            </h2>
            <div className="text-secondary/80 space-y-4">
              {aboutMe[currentLang].content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/lovable-uploads/78a34196-bb43-4dff-ad67-1dc23495d89c.png"
              alt="Irina in her art studio"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        
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