import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ChristmasPhotoshoot } from "@/components/ChristmasPhotoshoot";

type Language = 'ru' | 'en' | 'sv';

interface IndexProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const autumn2026 = {
  ru: {
    title: "Осенний набор 2026 в художественную студию в Бромме открыт!",
    intro: "Приглашаем детей и подростков на занятия по рисунку, живописи, академическому рисунку, скульптуре и декоративно-прикладному искусству. Учим видеть, творить и уверенно развивать художественные навыки в дружелюбной атмосфере.",
    scheduleTitle: "Расписание",
    lastUpdated: "Обновлено: 4 сентября 2026",
    groups: [
      { name: "Группы 7–10 лет", times: ["Вторник — 17:00", "Среда — 17:00", "Пятница — 17:00"] },
      { name: "Группа 12–16 лет", times: ["Четверг — 16:00", "Пятница — 15:30"] },
      { name: "Группа Академический рисунок (подростки, 14–18 лет)", times: ["Вторник и среда — 16:00"] }
    ],
    duration: "Продолжительность занятия — 1,5 часа",
    pricing: [
      "Абонемент (10 занятий) — 2400 крон",
      "Дополнительно:",
      "• Разовое занятие (по записи, при наличии мест) — 250 крон",
      "• Пробный урок (1 час) — 150 крон"
    ],
    subjectsTitle: "На занятиях изучаем:",
    subjects: [
      "рисунок (карандаш, уголь, пастель);",
      "живопись (акварель, гуашь);",
      "скульптуру (глина, папье-маше);",
      "графику (тушь, перо);",
      "декоративно-прикладное искусство."
    ],
    address: "Адрес: Stopvägen 38, Bromma",
    start: "Начало занятий: 1 сентября 2026",
    term: "Осенний термин: до 1 декабря 2026",
    holidays: "Каникулы: 24 октября — 2 ноября",
    contact: "Запись: 073-517-3330",
    materials: "Базовые материалы (бумага, краски) ученики приносят с собой. Специальные материалы предоставляет студия.",
    materialsLink: "Материалы на учебный год"
  },
  en: {
    title: "Autumn 2026 enrollment for the art studio in Bromma is now open!",
    intro: "We invite children and teenagers to classes in drawing, painting, academic drawing, sculpture, and decorative and applied arts. We teach students to see, create, and confidently develop their artistic skills in a friendly atmosphere.",
    scheduleTitle: "Schedule",
    lastUpdated: "Last updated: 4 September 2026",
    groups: [
      { name: "Groups 7–10 years", times: ["Tuesday — 17:00", "Wednesday — 17:00", "Friday — 17:00"] },
      { name: "Group 12–16 years", times: ["Thursday — 16:00", "Friday — 15:30"] },
      { name: "Academic Drawing group (teenagers, 14–18 years)", times: ["Tuesday and Wednesday — 16:00"] }
    ],
    duration: "Class duration — 1.5 hours",
    pricing: [
      "Term pass (10 classes) — 2400 SEK",
      "Additional options:",
      "• Single class (by appointment, if space available) — 250 SEK",
      "• Trial lesson (1 hour) — 150 SEK"
    ],
    subjectsTitle: "In our classes we study:",
    subjects: [
      "drawing (pencil, charcoal, pastel);",
      "painting (watercolor, gouache);",
      "sculpture (clay, papier-mâché);",
      "graphics (ink, pen);",
      "decorative and applied arts."
    ],
    address: "Address: Stopvägen 38, Bromma",
    start: "Classes start: 1 September 2026",
    term: "Autumn term: until 1 December 2026",
    holidays: "Holidays: 24 October — 2 November",
    contact: "Registration: 073-517-3330",
    materials: "Students bring basic materials (paper, paints) with them. Special materials are provided by the studio.",
    materialsLink: "Materials for the school year"
  },
  sv: {
    title: "Höstterminen 2026 — anmälan till konststudion i Bromma är nu öppen!",
    intro: "Vi bjuder in barn och tonåringar till kurser i teckning, målning, akademisk teckning, skulptur och dekorativ och tillämpad konst. Vi lär ut att se, skapa och självsäkert utveckla konstnärliga färdigheter i en vänlig atmosfär.",
    scheduleTitle: "Schema",
    lastUpdated: "Senast uppdaterad: 4 september 2026",
    groups: [
      { name: "Grupper 7–10 år", times: ["Tisdag — 17:00", "Onsdag — 17:00", "Fredag — 17:00"] },
      { name: "Grupp 12–16 år", times: ["Torsdag — 16:00", "Fredag — 15:30"] },
      { name: "Akademisk teckning (tonåringar, 14–18 år)", times: ["Tisdag och onsdag — 16:00"] }
    ],
    duration: "Lektionslängd — 1,5 timmar",
    pricing: [
      "Terminskort (10 lektioner) — 2400 kr",
      "Ytterligare alternativ:",
      "• Enstaka lektion (efter bokning, om plats finns) — 250 kr",
      "• Prova-på-lektion (1 timme) — 150 kr"
    ],
    subjectsTitle: "Under lektionerna studerar vi:",
    subjects: [
      "teckning (blyerts, kol, pastell);",
      "målning (akvarell, gouache);",
      "skulptur (lera, pappmaché);",
      "grafik (tusch, penna);",
      "dekorativ och tillämpad konst."
    ],
    address: "Adress: Stopvägen 38, Bromma",
    start: "Kursstart: 1 september 2026",
    term: "Hösttermin: till 1 december 2026",
    holidays: "Lov: 24 oktober — 2 november",
    contact: "Anmälan: 073-517-3330",
    materials: "Eleverna tar med sig basmaterial (papper, färg). Specialmaterial tillhandahålls av studion.",
    materialsLink: "Material för läsåret"
  }
};

const artMarket = {
  ru: {
    title: "🎨 Children's Art Market — праздник творчества и рождественская ярмарка!",
    intro: "Дорогие друзья, ученики и родители! В рамках JulKultur Bromma #julkultur приглашаем вас 12 декабря с 11:00 до 16:00 в Irina Zay Studio на праздничный Children's Art Market!",
    lead: "Это прекрасная возможность познакомиться с творчеством юных художников, поддержать их первые творческие шаги и приобрести настоящие детские шедевры.",
    sections: [
      {
        icon: "🖼",
        heading: "Детский вернисаж-продажа",
        body: "На выставке будут представлены художественные работы наших юных авторов. Все средства от продажи картин полностью передаются детям-художникам. Приходите познакомиться с авторами, послушать истории их работ и, возможно, найти картину, которую захочется забрать домой!"
      },
      {
        icon: "🎁",
        heading: "Рождественская ярмарка подарков ручной работы",
        body: "Приглашаем взрослых мастеров представить свои изделия на нашей праздничной ярмарке. Здесь вы сможете найти оригинальные подарки к Рождеству, созданные с душой и любовью. Участие мастеров организовано на условиях комиссии: 10% от продаж в фонд студии, остальные 90% получает автор."
      },
      {
        icon: "🧸",
        heading: "Loppis: игрушки и книги",
        body: ""
      }
    ],
    closing: "❤️ Приходите за подарками, вдохновением и хорошим настроением! Покупая работы юных художников и взрослых мастеров, вы поддерживаете творчество и помогаете развивать наши студийные проекты.",
    details: ["📍 Irina Zay Studio, Stopvägen 38", "📅 12 декабря", "⏰ 11:00–16:00"],
    outro: "Будем рады видеть вас, ваших друзей и близких! #300kg_konst"
  },
  en: {
    title: "🎨 Children's Art Market — a celebration of creativity and a Christmas fair!",
    intro: "Dear friends, students and parents! As part of JulKultur Bromma (#julkultur), we invite you on 12 December from 11:00 to 16:00 to Irina Zay Studio for a festive Children's Art Market!",
    lead: "This is a wonderful opportunity to discover the work of our young artists, support their first creative steps, and pick up a genuine child-made masterpiece.",
    sections: [
      {
        icon: "🖼",
        heading: "Children's sale exhibition",
        body: "The exhibition will feature artwork by our young authors. All proceeds from the sale of paintings go directly to the child artists. Come and meet the artists, hear the stories behind their work, and perhaps find a painting you would like to take home!"
      },
      {
        icon: "🎁",
        heading: "Christmas fair of handmade gifts",
        body: "We invite adult makers to present their crafts at our festive fair. Here you can find original Christmas gifts made with heart and love. Makers take part on a commission basis: 10% of sales goes to the studio fund, the remaining 90% goes to the artist."
      },
      {
        icon: "🧸",
        heading: "Loppis: toys and books",
        body: ""
      }
    ],
    closing: "❤️ Come for gifts, inspiration and good spirits! By buying the work of young artists and adult makers, you support creativity and help our studio projects grow.",
    details: ["📍 Irina Zay Studio, Stopvägen 38", "📅 12 December", "⏰ 11:00–16:00"],
    outro: "We would be glad to see you, your friends and your family! #300kg_konst"
  },
  sv: {
    title: "🎨 Children's Art Market — en kreativitetens fest och julmarknad!",
    intro: "Kära vänner, elever och föräldrar! Som en del av JulKultur Bromma (#julkultur) bjuder vi in dig den 12 december mellan 11:00 och 16:00 till Irina Zay Studio för en högtidlig Children's Art Market!",
    lead: "Det här är en fin möjlighet att upptäcka de unga konstnärernas skapande, stödja deras första kreativa steg och köpa riktiga barnmästerverk.",
    sections: [
      {
        icon: "🖼",
        heading: "Barnkonst med försäljning",
        body: "På utställningen visas konstverk av våra unga konstnärer. Hela försäljningen av målerier går oavkortat till barnkonstnärerna. Kom och träffa konstnärerna, lyssna på historierna bakom verken och kanske hitta en målning du vill ta med hem!"
      },
      {
        icon: "🎁",
        heading: "Julmarknad med handgjorda presenter",
        body: "Vi bjuder in vuxna hantverkare att visa sina alster på vår högtidliga marknad. Här kan du hitta originella julklappar skapade med hjärta och kärlek. Hantverkarna deltar på kommissionsbasis: 10 % av försäljningen går till studiofonden, de övriga 90 % går till konstnären."
      },
      {
        icon: "🧸",
        heading: "Loppis: leksaker och böcker",
        body: ""
      }
    ],
    closing: "❤️ Kom för presenter, inspiration och bra humör! Genom att köpa unga konstnärers och vuxna hantverkares verk stödjer du skapandet och hjälper våra studioprojekt att växa.",
    details: ["📍 Irina Zay Studio, Stopvägen 38", "📅 12 december", "⏰ 11:00–16:00"],
    outro: "Vi ser fram emot att träffa dig, dina vänner och din familj! #300kg_konst"
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

        {/* Children's Art Market Announcement */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-2/5">
              <img
                src="/lovable-uploads/childrens-art-market.jpg"
                alt={artMarket[currentLang].title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full lg:w-3/5 space-y-5 text-secondary/90">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary leading-tight">
                {artMarket[currentLang].title}
              </h2>
              <p className="leading-relaxed">
                {artMarket[currentLang].intro}
              </p>
              <p className="leading-relaxed">
                {artMarket[currentLang].lead}
              </p>
              <div className="space-y-4">
                {artMarket[currentLang].sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-secondary mb-1">
                      {section.icon} {section.heading}
                    </h3>
                    {section.body ? (
                      <p className="leading-relaxed">{section.body}</p>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="leading-relaxed">
                {artMarket[currentLang].closing}
              </p>
              <div className="space-y-1 font-medium text-secondary pt-2 border-t border-secondary/10">
                {artMarket[currentLang].details.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <p className="text-sm italic">{artMarket[currentLang].outro}</p>
            </div>
          </div>
        </div>

        {/* Autumn 2026 schedule */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          <div className="flex flex-col">
            <div className="w-full space-y-5 text-secondary/90">
              <div>
                <h3 className="font-semibold text-secondary mb-1">
                  {autumn2026[currentLang].scheduleTitle}
                </h3>
                <p className="text-xs text-secondary/60 mb-3">
                  {autumn2026[currentLang].lastUpdated}
                </p>
                <div className="space-y-3">
                  {autumn2026[currentLang].groups.map((group, index) => (
                    <div key={index}>
                      <p className="font-medium text-secondary">{group.name}</p>
                      <ul className="list-disc list-inside text-secondary/80">
                        {group.times.map((time, i) => (
                          <li key={i}>{time}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-3 font-medium">{autumn2026[currentLang].duration}</p>
              </div>
              <div className="space-y-1">
                {autumn2026[currentLang].pricing.map((line, index) => (
                  <p key={index} className={line.startsWith("•") ? "pl-2" : "font-medium"}>
                    {line}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-2">
                  {autumn2026[currentLang].subjectsTitle}
                </h3>
                <ul className="list-disc list-inside text-secondary/80">
                  {autumn2026[currentLang].subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-1 text-secondary/80 pt-2 border-t border-secondary/10">
                <p>{autumn2026[currentLang].address}</p>
                <p>{autumn2026[currentLang].start}</p>
                <p>{autumn2026[currentLang].term}</p>
                <p>{autumn2026[currentLang].holidays}</p>
                <p className="font-medium text-secondary">{autumn2026[currentLang].contact}</p>
                <p className="text-sm italic mt-2">{autumn2026[currentLang].materials}</p>
              </div>
              <a
                href={`/materials?lang=${currentLang}`}
                className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                <span aria-hidden>📦</span>
                {autumn2026[currentLang].materialsLink}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Christmas Photoshoots Announcement - uncomment in December */}
        {/* <ChristmasPhotoshoot currentLang={currentLang} showLink={false} /> */}

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
