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

Mitt mål är att lära barn tekniker och ge dem verktyg så att de kan skapa självständigt i framtiden. Jag sträver efter att tända kreativitetens fackla, föra den vidare till barn och inspirera dem att bära den framåt.

I studion skapar jag en balanserad atmosfär där komfort och kreativitet kombineras med disciplin och ett strukturerat tillvägagångssätt.`
  }
};

const springAnnouncement = {
  ru: {
    title: "Весна 2025 — Расписание занятий",
    schedule: {
      preschool: "Дошколята (5-6 лет):\nВторник 16:00\nСреда 17:00\nПродолжительность: 1 час\nЦена: 2000 крон (10 уроков)",
      school: "Школьники (7-9 лет):\nПонедельник 17:00\nВторник 15:00 и 17:00\nПродолжительность: 1,5 часа\nЦена: 2300 крон (10 уроков)",
      teens: "Подростки (10-15 лет):\nСреда 15:00\nЧетверг 15:00 и 17:00\nПродолжительность: 1,5 часа\nЦена: 2300 крон (10 уроков)",
      additional: "Разовое занятие: 250 крон\nПробный урок (1 час): 150 крон\nСкидка: 10% при записи двух детей\nСуббота: организация детских Арт классов (дней рождений) по записи, количество мест 10 максимум, цена договорная от 150-400 кр за ребенка в зависимости от материалов и сложности"
    }
  },
  en: {
    title: "Spring 2025 — Class Schedule",
    schedule: {
      preschool: "Preschool (5-6 years):\nTuesday 16:00\nWednesday 17:00\nDuration: 1 hour\nPrice: 2000 kr (10 lessons)",
      school: "School (7-9 years):\nMonday 17:00\nTuesday 15:00 and 17:00\nDuration: 1.5 hours\nPrice: 2300 kr (10 lessons)",
      teens: "Teens (10-15 years):\nWednesday 15:00\nThursday 15:00 and 17:00\nDuration: 1.5 hours\nPrice: 2300 kr (10 lessons)",
      additional: "Drop-in class: 250 kr\nTrial lesson (1 hour): 150 kr\nDiscount: 10% for two children from the same family\nSaturday: Art classes and birthday parties available by appointment, maximum 10 places, price varies from 150-400 kr per child depending on materials and complexity"
    }
  },
  sv: {
    title: "Våren 2025 — Klassschema",
    schedule: {
      preschool: "Förskola (5-6 år):\nTisdag 16:00\nOnsdag 17:00\nLängd: 1 timme\nPris: 2000 kr (10 lektioner)",
      school: "Skola (7-9 år):\nMåndag 17:00\nTisdag 15:00 och 17:00\nLängd: 1,5 timmar\nPris: 2300 kr (10 lektioner)",
      teens: "Tonåringar (10-15 år):\nOnsdag 15:00\nTorsdag 15:00 och 17:00\nLängd: 1,5 timmar\nPris: 2300 kr (10 lektioner)",
      additional: "Drop-in-klass: 250 kr\nProvlektion (1 timme): 150 kr\nRabatt: 10% för två barn från samma familj\nLördag: Konstklasser och födelsedagsfester tillgängliga efter bokning, max 10 platser, pris varierar från 150-400 kr per barn beroende på material och komplexitet"
    }
  }
};

const currentEvents = {
  ru: {
    title: "Текущие События",
    artMarketTitle: "Приглашаем к участию в Children's Art Market",
    artMarketContent: `Дорогие ученики и родители!

В рамках культурного фестиваля KUL TUR в Бромме, наша студия проводит день открытых дверей. Одним из главных событий этого дня станет вернисаж-продажа детских художественных работ — Children's Art Market.

Если вы хотите, чтобы работы вашего ребёнка были представлены на выставке, мы с радостью примем их для участия. Это прекрасная возможность почувствовать себя настоящим художником, поделиться творчеством и, возможно, найти благодарного покупателя.

✅ Все средства от продажи детских работ полностью передаются авторам.
Это наш способ поддержать первые творческие шаги юных художников.
🎨 Для взрослых (друзей студии, мастеров декоративно-прикладного искусства):
Мы приглашаем вас представить свои изделия на продажу в отдельной зоне.
💰 Комиссия студии — 10% от продажи, остальное получает автор.
Это поможет нам организовать мероприятие и поддержать студийные проекты.
Работы можно приносить заранее или в день мероприятия до 10:30.
Пожалуйста, подписывайте каждую работу (имя, возраст, цена).

📍 Children's Art Market состоится 17 мая с 11:00 до 17:00 по адресу Stopvägen 38.

Будем рады видеть вас среди участников и гостей!`,
    festivalLink: "Подробнее о фестивале KUL TUR"
  },
  en: {
    title: "Current Events",
    artMarketTitle: "You're invited to participate in the Children's Art Market!",
    artMarketContent: `Dear students, parents, and friends of the studio,

As part of the KUL TUR festival in Bromma, our studio will host an Open House Day, and one of the highlights will be the Children's Art Market — an exhibition and sale of children's artworks.

✨ Special spotlight on our young artists:
We warmly welcome your children's artworks for display and sale.
It's a wonderful opportunity to share their creativity and feel proud of being seen and appreciated.
All proceeds from the sale of children's artworks go directly to the young artists.

🎨 Studio friends and craft artists are also welcome to take part.
A separate space will be provided for your handmade works.
For adult participants, a 10% commission from each sale will go to the studio to support event organization. The rest goes to the artist.

📦 Artworks can be brought in advance or on the day of the event before 10:30.
Please label each item clearly with the artist's name, age (for children), and price.

📍 Children's Art Market takes place on May 17th from 11:00 to 17:00 at Stopvägen 38.

We look forward to seeing you — whether as a participant, guest, or art enthusiast.
Let's make this day a celebration of inspiration, creativity, and joyful connection`,
    festivalLink: "Learn more about the KUL TUR festival"
  },
  sv: {
    title: "Aktuella Händelser",
    artMarketTitle: "Du är inbjuden att delta i Children's Art Market!",
    artMarketContent: `Kära elever, föräldrar och vänner till studion,

Som en del av KUL TUR-festivalen i Bromma kommer vår studio att hålla öppet hus, och ett av höjdpunkterna blir Children's Art Market — en utställning och försäljning av barnens konstverk.

✨ Särskilt fokus på våra unga konstnärer:
Vi välkomnar varmt ditt barns konstverk för visning och försäljning.
Det är ett underbart tillfälle att dela deras kreativitet och känna sig stolt över att bli sedd och uppskattad.
Alla intäkter från försäljningen av barnens konstverk går direkt till de unga konstnärerna.

🎨 Studiovänner och hantverkskonstnärer är också välkomna att delta.
Ett separat utrymme kommer att tillhandahållas för dina handgjorda arbeten.
För vuxna deltagare går 10% provision från varje försäljning till studion för att stödja evenemangsorganisationen. Resten går till konstnären.

📦 Konstverk kan lämnas in i förväg eller på dagen för evenemanget före 10:30.
Vänligen märk varje föremål tydligt med konstnärens namn, ålder (för barn) och pris.

📍 Children's Art Market äger rum den 17 maj från 11:00 till 17:00 på Stopvägen 38.

Vi ser fram emot att träffa dig — oavsett om du är deltagare, gäst eller konstentusiast.
Låt oss göra denna dag till en firande av inspiration, kreativitet och glädjefull gemenskap.`,
    festivalLink: "Läs mer om KUL TUR-festivalen"
  }
};

const Index = ({ currentLang, onLanguageChange }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={onLanguageChange} />
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Current Events Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-secondary mb-10">
            {currentEvents[currentLang].title}
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/lovable-uploads/3483ccec-bd7f-4e71-a004-dfadb0a20552.png"
                alt="Children Art Market Poster"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-secondary">
                {currentEvents[currentLang].artMarketTitle}
              </h3>
              <div className="text-secondary/80 space-y-4">
                {currentEvents[currentLang].artMarketContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <a 
                href="https://kulturbromma.se/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary font-medium hover:underline"
              >
                {currentEvents[currentLang].festivalLink}
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
        
        {/* Spring Announcement Section */}
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
