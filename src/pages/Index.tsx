
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

const summerCourses = {
  ru: {
    title: "Летние творческие курсы 2025",
    mainTitle: "🎨 Летние творческие курсы для детей и подростков в \"Irina Zay Art Studio\"!",
    subtitle: "Подарите вашему ребёнку лето, полное вдохновения, красок и искусства!",
    courses: {
      pleinair: {
        title: "🌿 Курс «Пленэр: Пейзажи и ботаника»",
        dates: "📅 16–20 июня",
        time: "🕙 с 10:00 до 13:00",
        age: "👧 Возраст: 10+",
        description: "🎨 Учимся писать пейзажи с натуры — леса, озёра, цветущие сады и даже домики — сразу цветом!",
        materials: "🖌 Материалы: пастель, гуашь, акварель (приносите с собой, список выдаём при записи).",
        location: "📍 Встреча в студии, затем прогулка на пленэр в окрестностях Броммы.",
        price: "💰 Цена: 1750 kr за курс / 400 kr за 1 день",
        note: "⚠️ Не забудьте проездной и защиту от комаров и клещей!"
      },
      sculpture: {
        title: "🐚 Курс «Каркасная скульптура: Морские обитатели»",
        dates: "📅 23–27 июня",
        time: "🕚 с 11:00 до 13:00",
        age: "👧 Возраст: 10+",
        location: "📍 Адрес: Stopvägen 38, Bromma",
        description: "Создаём интерьерный арт-объект от каркаса до готовой фигуры: лепка, гипс, акрил, лакировка.",
        materials: "🎨 Все материалы включены!",
        price: "💰 Цена: 1300 kr"
      },
      ceramics: {
        title: "🐴 Курс по керамике «Народная игрушка»",
        dates: "📅 30 июня – 4 июля",
        time: "🕙 с 10:00 до 13:00",
        age: "👧 Возраст: 7+",
        description: "Создадим 5 уникальных игрушек в традиционных техниках: дымковская, каргопольская и филимоновская.",
        materials: "🧱 Работа с глиной + обжиг (всё включено)",
        price: "💰 Цена: 1700kr / Drop-in 350 kr",
        note: "⚠️ Готовые работы будут готовы к выдаче осенью (после просушки и обжига)."
      }
    },
    registration: "📞 Запись только по предоплате\nТелефон для регистрации: 073-517 33 30\n🌟 Количество мест ограничено — бронируйте заранее!\nСоздаём лето, полное творчества! ✨"
  },
  en: {
    title: "Summer Creative Courses 2025",
    mainTitle: "🎨 Summer creative courses for children and teenagers at \"Irina Zay Art Studio\"!",
    subtitle: "Give your child a summer full of inspiration, colors and art!",
    courses: {
      pleinair: {
        title: "🌿 Course \"Plein Air: Landscapes and Botany\"",
        dates: "📅 June 16–20",
        time: "🕙 10:00 to 13:00",
        age: "👧 Age: 10+",
        description: "🎨 Learn to paint landscapes from nature — forests, lakes, blooming gardens and even houses — directly with color!",
        materials: "🖌 Materials: pastels, gouache, watercolor (bring your own, list provided upon registration).",
        location: "📍 Meeting at the studio, then walk to plein air locations around Bromma.",
        price: "💰 Price: 1750 kr per course / 400 kr per day",
        note: "⚠️ Don't forget travel pass and protection from mosquitoes and ticks!"
      },
      sculpture: {
        title: "🐚 Course \"Frame Sculpture: Marine Life\"",
        dates: "📅 June 23–27",
        time: "🕚 11:00 to 13:00",
        age: "👧 Age: 10+",
        location: "📍 Address: Stopvägen 38, Bromma",
        description: "Create interior art objects from frame to finished figure: sculpting, plaster, acrylic, varnishing.",
        materials: "🎨 All materials included!",
        price: "💰 Price: 1300 kr"
      },
      ceramics: {
        title: "🐴 Ceramics Course \"Folk Toy\"",
        dates: "📅 June 30 – July 4",
        time: "🕙 10:00 to 13:00",
        age: "👧 Age: 7+",
        description: "Create 5 unique toys in traditional techniques: Dymkovo, Kargopol and Filimonovo.",
        materials: "🧱 Clay work + firing (everything included)",
        price: "💰 Price: 1700kr / Drop-in 350 kr",
        note: "⚠️ Finished works will be ready for pickup in autumn (after drying and firing)."
      }
    },
    registration: "📞 Registration only with prepayment\nRegistration phone: 073-517 33 30\n🌟 Limited seats — book in advance!\nCreating a summer full of creativity! ✨"
  },
  sv: {
    title: "Sommarkreativa kurser 2025",
    mainTitle: "🎨 Sommarkreativa kurser för barn och tonåringar på \"Irina Zay Art Studio\"!",
    subtitle: "Ge ditt barn en sommar full av inspiration, färger och konst!",
    courses: {
      pleinair: {
        title: "🌿 Kurs \"Plein Air: Landskap och botanik\"",
        dates: "📅 16–20 juni",
        time: "🕙 10:00 till 13:00",
        age: "👧 Ålder: 10+",
        description: "🎨 Lär dig måla landskap från naturen — skogar, sjöar, blommande trädgårdar och till och med hus — direkt med färg!",
        materials: "🖌 Material: pastell, gouache, akvarell (ta med egna, lista ges vid registrering).",
        location: "📍 Träff i studion, sedan promenad till plein air-platser runt Bromma.",
        price: "💰 Pris: 1750 kr per kurs / 400 kr per dag",
        note: "⚠️ Glöm inte resekort och skydd mot myggor och fästingar!"
      },
      sculpture: {
        title: "🐚 Kurs \"Ramskulptur: Havsliv\"",
        dates: "📅 23–27 juni",
        time: "🕚 11:00 till 13:00",
        age: "👧 Ålder: 10+",
        location: "📍 Adress: Stopvägen 38, Bromma",
        description: "Skapa interiörkonstobjekt från ram till färdig figur: skulptering, gips, akryl, lackering.",
        materials: "🎨 Allt material ingår!",
        price: "💰 Pris: 1300 kr"
      },
      ceramics: {
        title: "🐴 Keramikkurs \"Folkleksak\"",
        dates: "📅 30 juni – 4 juli",
        time: "🕙 10:00 till 13:00",
        age: "👧 Ålder: 7+",
        description: "Skapa 5 unika leksaker i traditionella tekniker: Dymkovo, Kargopol och Filimonovo.",
        materials: "🧱 Lerarbete + bränning (allt ingår)",
        price: "💰 Pris: 1700kr / Drop-in 350 kr",
        note: "⚠️ Färdiga verk kommer att vara redo för upphämtning på hösten (efter torkning och bränning)."
      }
    },
    registration: "📞 Anmälan endast med förskottsbetalning\nRegistreringstelefon: 073-517 33 30\n🌟 Begränsat antal platser — boka i förväg!\nSkapar en sommar full av kreativitet! ✨"
  }
};

const autumnCourse = {
  ru: {
    title: "🎨 Курс рисования для подростков \"Создадим шедевр вместе\"",
    subtitle: "в школе Estety от Irina Zay Art Studio",
    announcement: "🍁 Открыта запись на осенний курс 2025! 🍁",
    motto: "Художник живёт в каждом из нас — давайте пробудим его вместе!",
    schedule: {
      dates: "📅 Даты проведения курса:\nНачало — 31 августа\nПоследнее занятие — 23 ноября\nКаникулы — 26 октября по 2 ноября",
      pleinair: "🎨 Пленэр на свежем воздухе — 7 сентября в 10:30 (2,5 часа, входит в курс как бонус!)",
      location: "📍 Адрес: Старый город, Stora Nygatan 30",
      contact: "📞 Запись и вопросы: 073 517 33 30 (Ирина)"
    },
    group: {
      title: "👥 Группа \"Мастихины\" (12+):",
      schedule: "Занятия по воскресеньям в 12:00",
      duration: "🔟 Всего 10 уроков по 1,5 часа",
      price: "💰 Стоимость курса — 2400 kr",
      registration: "Запись только по предоплате"
    },
    footer: "🌟 Не упустите шанс развить творческий потенциал своего подростка в уютной и вдохновляющей атмосфере!\n📲 Места ограничены — бронируйте заранее!"
  },
  en: {
    title: "🎨 Drawing course for teenagers \"Let's create a masterpiece together\"",
    subtitle: "at Estety school by Irina Zay Art Studio",
    announcement: "🍁 Registration open for autumn course 2025! 🍁",
    motto: "An artist lives in each of us — let's awaken them together!",
    schedule: {
      dates: "📅 Course dates:\nStart — August 31\nLast lesson — November 23\nHolidays — October 26 to November 2",
      pleinair: "🎨 Outdoor plein air — September 7 at 10:30 (2.5 hours, included as a bonus!)",
      location: "📍 Address: Old Town, Stora Nygatan 30",
      contact: "📞 Registration and questions: 073 517 33 30 (Irina)"
    },
    group: {
      title: "👥 \"Palette Knives\" group (12+):",
      schedule: "Classes on Sundays at 12:00",
      duration: "🔟 Total 10 lessons of 1.5 hours each",
      price: "💰 Course fee — 2400 kr",
      registration: "Registration only with prepayment"
    },
    footer: "🌟 Don't miss the chance to develop your teenager's creative potential in a cozy and inspiring atmosphere!\n📲 Limited seats — book in advance!"
  },
  sv: {
    title: "🎨 Ritningskurs för tonåringar \"Låt oss skapa ett mästerverk tillsammans\"",
    subtitle: "på Estety-skolan av Irina Zay Art Studio",
    announcement: "🍁 Registrering öppen för höstkurs 2025! 🍁",
    motto: "En konstnär lever i var och en av oss — låt oss väcka dem tillsammans!",
    schedule: {
      dates: "📅 Kursdatum:\nStart — 31 augusti\nSista lektionen — 23 november\nLov — 26 oktober till 2 november",
      pleinair: "🎨 Utomhus plein air — 7 september kl 10:30 (2,5 timmar, ingår som bonus!)",
      location: "📍 Adress: Gamla stan, Stora Nygatan 30",
      contact: "📞 Registrering och frågor: 073 517 33 30 (Irina)"
    },
    group: {
      title: "👥 \"Palettknivarna\" grupp (12+):",
      schedule: "Lektioner på söndagar kl 12:00",
      duration: "🔟 Totalt 10 lektioner på 1,5 timme vardera",
      price: "💰 Kursavgift — 2400 kr",
      registration: "Registrering endast med förskottsbetalning"
    },
    footer: "🌟 Missa inte chansen att utveckla din tonårings kreativa potential i en mysig och inspirerande atmosfär!\n📲 Begränsat antal platser — boka i förväg!"
  }
};

const soapCandles = {
  ru: {
    title: "🎨🧼 Приглашаем детей на творческий мастер-класс в Стокгольме! 🕯️✨",
    subtitle: "Хочешь провести время весело и с пользой? Приходи на мастер-класс по созданию мыла и свечей, где каждый сможет почувствовать себя настоящим мастером!",
    details: {
      location: "📍 Где: Стокгольм",
      date: "📅 Когда: 15 июня",
      time: "🕘 Время 11:00 (продолжительность 2 часа)",
      address: "📢 Адрес Stopvägen 38",
      price: "💰 Стоимость участия: 350 крон",
      age: "👧👦 Возраст: от 6 лет"
    },
    activities: {
      title: "На мастер-классе:",
      soap: "🧼 Сделаем ароматное и красивое мыло своими руками",
      candles: "🕯️ Создадим уникальные свечи с разными формами и запахами",
      takeaway: "🎁 Каждый участник унесёт свои творения домой!",
      teacher: "👩‍🏫 Преподаватель @anastasia_morzzz"
    },
    registration: "Количество мест ограничено — успей записаться!\n📩 Для регистрации и вопросов пишите в личные сообщения. И по телефону 0735173330\n\nПодарите своему ребёнку день творчества и ярких эмоций! 🌈"
  },
  en: {
    title: "🎨🧼 We invite children to a creative workshop in Stockholm! 🕯️✨",
    subtitle: "Want to spend time fun and useful? Come to a workshop on creating soap and candles, where everyone can feel like a real master!",
    details: {
      location: "📍 Where: Stockholm",
      date: "📅 When: June 15",
      time: "🕘 Time 11:00 (duration 2 hours)",
      address: "📢 Address Stopvägen 38",
      price: "💰 Participation fee: 350 kr",
      age: "👧👦 Age: from 6 years"
    },
    activities: {
      title: "At the workshop:",
      soap: "🧼 Make fragrant and beautiful soap with your own hands",
      candles: "🕯️ Create unique candles with different shapes and scents",
      takeaway: "🎁 Each participant will take their creations home!",
      teacher: "👩‍🏫 Teacher @anastasia_morzzz"
    },
    registration: "Limited seats — hurry to register!\n📩 For registration and questions, write to private messages. And by phone 0735173330\n\nGive your child a day of creativity and bright emotions! 🌈"
  },
  sv: {
    title: "🎨🧼 Vi inbjuder barn till en kreativ workshop i Stockholm! 🕯️✨",
    subtitle: "Vill du tillbringa tid roligt och nyttigt? Kom till en workshop om att skapa tvål och ljus, där alla kan känna sig som en riktig mästare!",
    details: {
      location: "📍 Var: Stockholm",
      date: "📅 När: 15 juni",
      time: "🕘 Tid 11:00 (varaktighet 2 timmar)",
      address: "📢 Adress Stopvägen 38",
      price: "💰 Deltagaravgift: 350 kr",
      age: "👧👦 Ålder: från 6 år"
    },
    activities: {
      title: "På workshopen:",
      soap: "🧼 Gör doftande och vacker tvål med egna händer",
      candles: "🕯️ Skapa unika ljus med olika former och dofter",
      takeaway: "🎁 Varje deltagare kommer att ta sina kreationer hem!",
      teacher: "👩‍🏫 Lärare @anastasia_morzzz"
    },
    registration: "Begränsat antal platser — skynda dig att registrera!\n📩 För registrering och frågor, skriv till privata meddelanden. Och via telefon 0735173330\n\nGe ditt barn en dag av kreativitet och ljusa känslor! 🌈"
  }
};

const Index = ({ currentLang, onLanguageChange }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={onLanguageChange} />
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Summer Courses Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-secondary mb-6">
            {summerCourses[currentLang].title}
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/lovable-uploads/0b836411-c360-4739-bf85-3ca993cdafae.png"
                alt="Summer Art Courses 2025"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-xl font-bold text-secondary">
                {summerCourses[currentLang].mainTitle}
              </h3>
              <p className="text-secondary/80 mb-4">
                {summerCourses[currentLang].subtitle}
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-secondary mb-2">
                    {summerCourses[currentLang].courses.pleinair.title}
                  </h4>
                  <div className="text-sm text-secondary/80 space-y-1">
                    <p>{summerCourses[currentLang].courses.pleinair.dates}</p>
                    <p>{summerCourses[currentLang].courses.pleinair.time}</p>
                    <p>{summerCourses[currentLang].courses.pleinair.age}</p>
                    <p>{summerCourses[currentLang].courses.pleinair.description}</p>
                    <p>{summerCourses[currentLang].courses.pleinair.materials}</p>
                    <p>{summerCourses[currentLang].courses.pleinair.location}</p>
                    <p>{summerCourses[currentLang].courses.pleinair.price}</p>
                    <p>{summerCourses[currentLang].courses.pleinair.note}</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-secondary mb-2">
                    {summerCourses[currentLang].courses.sculpture.title}
                  </h4>
                  <div className="text-sm text-secondary/80 space-y-1">
                    <p>{summerCourses[currentLang].courses.sculpture.dates}</p>
                    <p>{summerCourses[currentLang].courses.sculpture.time}</p>
                    <p>{summerCourses[currentLang].courses.sculpture.age}</p>
                    <p>{summerCourses[currentLang].courses.sculpture.location}</p>
                    <p>{summerCourses[currentLang].courses.sculpture.description}</p>
                    <p>{summerCourses[currentLang].courses.sculpture.materials}</p>
                    <p>{summerCourses[currentLang].courses.sculpture.price}</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-secondary mb-2">
                    {summerCourses[currentLang].courses.ceramics.title}
                  </h4>
                  <div className="text-sm text-secondary/80 space-y-1">
                    <p>{summerCourses[currentLang].courses.ceramics.dates}</p>
                    <p>{summerCourses[currentLang].courses.ceramics.time}</p>
                    <p>{summerCourses[currentLang].courses.ceramics.age}</p>
                    <p>{summerCourses[currentLang].courses.ceramics.description}</p>
                    <p>{summerCourses[currentLang].courses.ceramics.materials}</p>
                    <p>{summerCourses[currentLang].courses.ceramics.price}</p>
                    <p>{summerCourses[currentLang].courses.ceramics.note}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <pre className="whitespace-pre-wrap font-sans text-sm text-secondary">
                  {summerCourses[currentLang].registration}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Autumn Course Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/lovable-uploads/5f1681fe-4d52-4767-ab5b-5e96578e718d.png"
                alt="Estety Autumn Course 2025"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-xl font-bold text-secondary">
                {autumnCourse[currentLang].title}
              </h3>
              <p className="text-lg text-secondary/90">
                {autumnCourse[currentLang].subtitle}
              </p>
              <p className="text-primary font-medium">
                {autumnCourse[currentLang].announcement}
              </p>
              <p className="text-secondary/80 italic">
                {autumnCourse[currentLang].motto}
              </p>
              
              <div className="space-y-3">
                <div className="text-sm text-secondary/80">
                  <pre className="whitespace-pre-wrap font-sans">
                    {autumnCourse[currentLang].schedule.dates}
                  </pre>
                </div>
                <p className="text-sm text-secondary/80">
                  {autumnCourse[currentLang].schedule.pleinair}
                </p>
                <p className="text-sm text-secondary/80">
                  {autumnCourse[currentLang].schedule.location}
                </p>
                <p className="text-sm text-secondary/80">
                  {autumnCourse[currentLang].schedule.contact}
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 mt-6">
                <h4 className="font-semibold text-secondary mb-2">
                  {autumnCourse[currentLang].group.title}
                </h4>
                <div className="text-sm text-secondary/80 space-y-1">
                  <p>{autumnCourse[currentLang].group.schedule}</p>
                  <p>{autumnCourse[currentLang].group.duration}</p>
                  <p>{autumnCourse[currentLang].group.price}</p>
                  <p>{autumnCourse[currentLang].group.registration}</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <pre className="whitespace-pre-wrap font-sans text-sm text-secondary">
                  {autumnCourse[currentLang].footer}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Soap and Candles Workshop Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-secondary mb-6">
            {soapCandles[currentLang].title}
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/lovable-uploads/920f07cd-3b2b-4d07-bfff-110162c90968.png"
                alt="Soap and Candles Workshop"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-secondary/80">
                {soapCandles[currentLang].subtitle}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-secondary mb-3">Детали:</h4>
                  <div className="space-y-2 text-sm text-secondary/80">
                    <p>{soapCandles[currentLang].details.location}</p>
                    <p>{soapCandles[currentLang].details.date}</p>
                    <p>{soapCandles[currentLang].details.time}</p>
                    <p>{soapCandles[currentLang].details.address}</p>
                    <p>{soapCandles[currentLang].details.price}</p>
                    <p>{soapCandles[currentLang].details.age}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary mb-3">
                    {soapCandles[currentLang].activities.title}
                  </h4>
                  <div className="space-y-2 text-sm text-secondary/80">
                    <p>{soapCandles[currentLang].activities.soap}</p>
                    <p>{soapCandles[currentLang].activities.candles}</p>
                    <p>{soapCandles[currentLang].activities.takeaway}</p>
                    <p>{soapCandles[currentLang].activities.teacher}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg">
                <pre className="whitespace-pre-wrap font-sans text-sm text-secondary">
                  {soapCandles[currentLang].registration}
                </pre>
              </div>
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
