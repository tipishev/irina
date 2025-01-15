import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Schedule } from "@/components/Schedule";

type Language = 'ru' | 'en' | 'sv';

interface IndexProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const messageOfTheDay = {
  ru: "Специальный мастер-класс ко Дню Святого Валентина! Присоединяйтесь к нашему творческому классу, где мы будем создавать уникальные подарки и украшения. Научитесь создавать романтические открытки, декоративные сердца и особенные сувениры для ваших любимых. Забронируйте место сейчас!",
  en: "Valentine's Day Special Crafts Class! Join our creative workshop where we'll be making unique gifts and decorations. Learn to create romantic cards, decorative hearts, and special keepsakes for your loved ones. Book your spot now!",
  sv: "Alla hjärtans dag specialklass! Delta i vår kreativa workshop där vi skapar unika presenter och dekorationer. Lär dig göra romantiska kort, dekorativa hjärtan och speciella minnessaker för dina nära och kära. Boka din plats nu!"
};

const Index = ({ currentLang, onLanguageChange }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={onLanguageChange} />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
          <div className="w-full md:w-1/3 aspect-[3/4] bg-gradient-to-br from-pink-100 to-red-200 rounded-lg shadow-lg flex items-center justify-center p-6">
            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-red-600">❤️</div>
              <div className="text-xl font-semibold text-red-800">
                {currentLang === 'ru' ? 'День Святого Валентина' : 
                 currentLang === 'sv' ? 'Alla hjärtans dag' : 
                 "Valentine's Day"}
              </div>
              <div className="text-lg text-red-700">
                {currentLang === 'ru' ? 'Творческий Мастер-класс' : 
                 currentLang === 'sv' ? 'Kreativ Workshop' : 
                 'Creative Workshop'}
              </div>
            </div>
          </div>
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