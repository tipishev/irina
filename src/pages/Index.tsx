import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Schedule } from "@/components/Schedule";

type Language = 'ru' | 'en' | 'sv';

interface IndexProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const messageOfTheDay = {
  ru: "Добро пожаловать! Сегодня отличный день для творчества! Присоединяйтесь к нашему летнему художественному лагерю для молодежи в возрасте от 8 до 12 лет. Занятия проходят с 7 июня по 17 августа. Давайте вместе создадим яркие воспоминания этим летом!",
  en: "Welcome! Today is a great day for creativity! Join our Youth Summer Art Camp for ages 8-12, running from June 7 to August 17. Let's create colorful memories together this summer!",
  sv: "Välkommen! Idag är en bra dag för kreativitet! Gå med i vårt konstsommarläger för ungdomar i åldrarna 8-12 år, från 7 juni till 17 augusti. Låt oss skapa färgglada minnen tillsammans denna sommar!"
};

const Index = ({ currentLang, onLanguageChange }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={onLanguageChange} />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
          <img 
            src="/lovable-uploads/f465f870-a74e-4dd1-a3d4-88287d317a81.png"
            alt="Summer Art Camp Poster"
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <p className="text-xl text-secondary italic flex-1 text-left leading-relaxed">
            {messageOfTheDay[currentLang]}
          </p>
        </div>
      </div>
      <Services currentLang={currentLang} />
      <Schedule currentLang={currentLang} />
    </div>
  );
};

export default Index;