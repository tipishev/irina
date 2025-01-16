import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

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

const classesAnnouncement = {
  ru: "Занятия начинаются 20 января 2025 года, запись открыта.",
  en: "Classes begin on January 20th 2025, the signup is open.",
  sv: "Klasserna börjar den 20 januari 2025, anmälan är öppen."
};

const Index = ({ currentLang, onLanguageChange }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={onLanguageChange} />
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
          <div className="w-full md:w-1/3 aspect-[3/4] bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
              alt="Art School"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="text-xl text-secondary italic flex-1 text-left leading-relaxed">
            {classesAnnouncement[currentLang]}
          </p>
        </div>
        
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
    </div>
  );
};

export default Index;