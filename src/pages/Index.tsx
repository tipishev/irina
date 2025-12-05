import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import julKulturImage from "@/assets/jul-kultur-2025.png";

type Language = 'ru' | 'en' | 'sv';

interface IndexProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const julKultur = {
  ru: {
    title: "🎄 En Jul-Kultur 2025",
    subtitle: "Рождественская культурная прогулка от Abrahamsberg до Brommaplan",
    description: "Присоединяйтесь к рождественскому культурному событию! Открытые ателье художников, рождественский мингель, возможность купить искусство и уникальные подарки, а также вкусный бранч.",
    date: "📅 6-7 декабря",
    time: "⏰ Начало в 11:00",
    location: "📍 Маршрут: от Abrahamsberg до Brommaplan"
  },
  en: {
    title: "🎄 En Jul-Kultur 2025",
    subtitle: "Christmas cultural walk from Abrahamsberg to Brommaplan",
    description: "Join the Christmas cultural event! Open artist studios, Christmas mingling, opportunity to buy art and unique gifts, plus delicious brunch.",
    date: "📅 December 6-7",
    time: "⏰ Start at 11:00",
    location: "📍 Route: from Abrahamsberg to Brommaplan"
  },
  sv: {
    title: "🎄 En Jul-Kultur 2025",
    subtitle: "Julkulturpromenad från Abrahamsberg till Brommaplan",
    description: "Delta i julens kulturevenemang! Öppna ateljéer, julmingel, möjlighet att köpa konst och unika julklappar, samt god brunch.",
    date: "📅 6-7 december",
    time: "⏰ Start kl 11",
    location: "📍 Sträcka: från Abrahamsberg till Brommaplan"
  }
};


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

Mitt mål är att lära barn tekniker och ge dem verktyg så att de kan skapa självständigt i framtiden. Jag sträver efter att tända kreativitetens fackla, föra den vidare till barn och inspirera dem att bära den framåt.

I studion skapar jag en balanserad atmosfär där komfort och kreativitet kombineras med disciplin och ett strukturerat tillvägagångssätt.`
  }
};



const Index = ({ currentLang, onLanguageChange }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={onLanguageChange} />
      <div className="container mx-auto px-4 py-12 space-y-16">

        {/* Jul-Kultur 2025 Event Announcement */}
        <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg shadow-lg p-8 border-2 border-red-200">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img
                src={julKulturImage}
                alt="En Jul-Kultur 2025"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <h3 className="text-3xl font-bold text-red-700">
                {julKultur[currentLang].title}
              </h3>
              <p className="text-xl font-semibold text-green-700">
                {julKultur[currentLang].subtitle}
              </p>
              <p className="text-secondary/80">
                {julKultur[currentLang].description}
              </p>
              <div className="flex flex-wrap gap-4 text-lg">
                <span className="bg-red-100 px-4 py-2 rounded-full text-red-700 font-medium">
                  {julKultur[currentLang].date}
                </span>
                <span className="bg-green-100 px-4 py-2 rounded-full text-green-700 font-medium">
                  {julKultur[currentLang].time}
                </span>
              </div>
              <p className="text-secondary/80 font-medium">
                {julKultur[currentLang].location}
              </p>
              <a 
                href="https://kulturbromma.se/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
              >
                {currentLang === 'ru' ? '🔗 Подробнее на kulturbromma.se' : 
                 currentLang === 'en' ? '🔗 More details at kulturbromma.se' : 
                 '🔗 Mer information på kulturbromma.se'}
              </a>
            </div>
          </div>
        </div>

        {/* About Me Section */}
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
              src="/lovable-uploads/cda4af1c-0fd8-4fd4-a32a-76bbdef97884.png"
              alt="Art teacher in studio surrounded by colorful artwork"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <Services currentLang={currentLang} />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <p className="text-lg text-center text-secondary/60">
            Stopvägen 38, 168 35 Bromma, Stockholm
          </p>
          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Studio Location"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Stopvägen+38,+168+35+Bromma,+Stockholm"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
