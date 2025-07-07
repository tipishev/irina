import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

type Language = 'ru' | 'en' | 'sv';

interface IndexProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const textileCourse = {
  ru: {
    title: "🎨 Летний курс \"Текстиль\" для детей от 7 лет",
    dates: "📅 14–18 июля",
    time: "🕚 Время: 10:00–13:00",
    location: "📍 Адрес: Stopvägen 38, Bromma",
    phone: "📞 Запись по телефону: 073-517-3330",
    intro: "На этой неделе ребята будут осваивать разные творческие техники работы с тканью, фетром и нитями. Каждый день — новое увлекательное занятие!",
    schedule: "📆 Программа по дням:",
    days: {
      monday: "Понедельник:\n🔸 Бисероплетение и создание фенечек",
      tuesday: "Вторник:\n🔸 Шьём брошь в виде розы из джинсовой ткани",
      wednesday: "Среда:\n🔸 Макраме: плетём настенное панно в форме листика",
      thursday: "Четверг:\n🔸 Роспись ткани в стиле тай-дай — 3 разные техники (нужно принести свои футболки!)",
      friday: "Пятница:\n🔸 Шьём мягкую игрушку из фетра — Царевна-лягушка"
    },
    important: "📌 Важно!",
    notes: [
      "🔹 Необходимо принести 3 футболки: 1 белую и 2 чёрные для росписи",
      "🔹 С собой каждый день — ланч"
    ],
    pricing: "💰 Стоимость:",
    prices: [
      "— Вся неделя: 1300 крон",
      "— Разовое посещение (дроп-ин): 270 крон/день"
    ],
    footer: "Ждём юных мастеров на неделю творчества и вдохновения!"
  },
  en: {
    title: "🎨 Summer \"Textile\" Course for Children 7+",
    dates: "📅 July 14–18",
    time: "🕚 Time: 10:00–13:00",
    location: "📍 Address: Stopvägen 38, Bromma",
    phone: "📞 Registration by phone: 073-517-3330",
    intro: "This week children will master various creative techniques working with fabric, felt and threads. Each day — a new exciting activity!",
    schedule: "📆 Daily Program:",
    days: {
      monday: "Monday:\n🔸 Beadwork and friendship bracelet making",
      tuesday: "Tuesday:\n🔸 Sewing a rose brooch from denim fabric",
      wednesday: "Wednesday:\n🔸 Macrame: weaving a leaf-shaped wall panel",
      thursday: "Thursday:\n🔸 Tie-dye fabric painting — 3 different techniques (bring your own t-shirts!)",
      friday: "Friday:\n🔸 Sewing a soft felt toy — Princess Frog"
    },
    important: "📌 Important!",
    notes: [
      "🔹 Need to bring 3 t-shirts: 1 white and 2 black for painting",
      "🔹 Bring lunch each day"
    ],
    pricing: "💰 Cost:",
    prices: [
      "— Full week: 1300 kr",
      "— Single visit (drop-in): 270 kr/day"
    ],
    footer: "We await young masters for a week of creativity and inspiration!"
  },
  sv: {
    title: "🎨 Sommar \"Textil\" Kurs för Barn 7+",
    dates: "📅 14–18 juli",
    time: "🕚 Tid: 10:00–13:00",
    location: "📍 Adress: Stopvägen 38, Bromma",
    phone: "📞 Anmälan per telefon: 073-517-3330",
    intro: "Denna vecka kommer barn att bemästra olika kreativa tekniker för att arbeta med tyg, filt och trådar. Varje dag — en ny spännande aktivitet!",
    schedule: "📆 Dagligt Program:",
    days: {
      monday: "Måndag:\n🔸 Pärlarbete och vänskapsarmband",
      tuesday: "Tisdag:\n🔸 Sy en rosbrosch av jeanstyg",
      wednesday: "Onsdag:\n🔸 Makrame: väva en bladformad väggpanel",
      thursday: "Torsdag:\n🔸 Tie-dye tygmålning — 3 olika tekniker (ta med egna t-shirts!)",
      friday: "Fredag:\n🔸 Sy en mjuk filtleksak — Prinsessa Groda"
    },
    important: "📌 Viktigt!",
    notes: [
      "🔹 Behöver ta med 3 t-shirts: 1 vit och 2 svarta för målning",
      "🔹 Ta med lunch varje dag"
    ],
    pricing: "💰 Kostnad:",
    prices: [
      "— Hela veckan: 1300 kr",
      "— Enskilt besök (drop-in): 270 kr/dag"
    ],
    footer: "Vi väntar på unga mästare för en vecka av kreativitet och inspiration!"
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

const julyCourses = {
  ru: {
    title: "🎨 Летние творческие курсы в художественной студии!",
    location: "📍 Stopvägen 38, Bromma",
    phone: "📞 Запись по телефону: 073-517-3330",
    description: "Приглашаем детей на увлекательные и разнообразные занятия в июле! Все материалы включены в стоимость. Можно записаться на полный курс или прийти по системе drop-in — 270 крон за занятие.",
    courses: {
      assorted: {
        title: "🧶 1. Ассорти",
        dates: "📅 7–11 июля",
        time: "🕚 11:00–13:00",
        age: "Для детей от 7+",
        price: "💰 Стоимость за неделю: 1300 крон",
        description: "Каждый день — новое вдохновляющее занятие:",
        schedule: [
          "7 июля (понедельник): валяние",
          "8 июля (вторник): декупаж по стеклу",
          "9 июля (среда): роспись по керамике (тарелки)",
          "10 июля (четверг): роспись по дереву ложек (хохлома)",
          "11 июля (пятница): 3D-цветы из термомозаики"
        ]
      },
      textile: {
        title: "🧵 2. Текстиль",
        dates: "📅 14–18 июля",
        time: "🕚 11:00–13:00",
        age: "Для детей от 7+",
        price: "💰 Стоимость за неделю: 1300 крон",
        description: "На занятиях:",
        activities: [
          "Бисероплетение и работа с бусинками",
          "Узелковые техники в росписи ткани Тай-дай футболки, цветочные оттиски",
          "Мягкая игрушка шьём из войлок (царевна Лягушка)",
          "Роспись акрилом по ткани, работа с грунтом, создание игрушки"
        ],
        note: "‼️ На занятие по тай-дай участникам необходимо принести с собой три футболки: однотонные две чёрные/синие/зелёные и одну белую."
      },
      sculpture: {
        title: "🎭 3. Каркасная скульптура",
        dates: "📅 21–25 июля",
        time: "🕚 11:00–13:00",
        age: "Для детей от 7 лет",
        price: "💰 Стоимость за неделю: 1300 крон",
        description: "Изучаем основы объемной формы: лепим, строим, создаём выразительные фигурки и персонажи из проволоки, фольги, бумаги, работа с гипсом и акрилом и других материалов. Итоговую работу можно будет забрать после лакировки."
      }
    },
    footer: "📢 Записывайтесь заранее — количество мест ограничено!\n✨ Приходите творить, пробовать новое и весело проводить лето вместе с нами!"
  },
  en: {
    title: "🎨 Summer creative courses at the art studio!",
    location: "📍 Stopvägen 38, Bromma",
    phone: "📞 Registration by phone: 073-517-3330",
    description: "We invite children to exciting and diverse activities in July! All materials are included in the price. You can sign up for a full course or come on a drop-in basis — 270 kr per session.",
    courses: {
      assorted: {
        title: "🧶 1. Assorted",
        dates: "📅 July 7–11",
        time: "🕚 11:00–13:00",
        age: "For children 7+",
        price: "💰 Cost per week: 1300 kr",
        description: "Each day — a new inspiring activity:",
        schedule: [
          "July 7 (Monday): felting",
          "July 8 (Tuesday): glass decoupage",
          "July 9 (Wednesday): ceramic painting (plates)",
          "July 10 (Thursday): wooden spoon painting (Khokhloma)",
          "July 11 (Friday): 3D flowers from thermal mosaic"
        ]
      },
      textile: {
        title: "🧵 2. Textile",
        dates: "📅 July 14–18",
        time: "🕚 11:00–13:00",
        age: "For children 7+",
        price: "💰 Cost per week: 1300 kr",
        description: "In classes:",
        activities: [
          "Beadwork and working with beads",
          "Tie-dye techniques in fabric painting, floral prints",
          "Soft toy sewing from felt (Princess Frog)",
          "Acrylic painting on fabric, working with primer, toy creation"
        ],
        note: "‼️ For tie-dye classes, participants need to bring three t-shirts: two solid colored black/blue/green and one white."
      },
      sculpture: {
        title: "🎭 3. Frame sculpture",
        dates: "📅 July 21–25",
        time: "🕚 11:00–13:00",
        age: "For children from 7 years old",
        price: "💰 Cost per week: 1300 kr",
        description: "Learning the basics of three-dimensional form: sculpting, building, creating expressive figures and characters from wire, foil, paper, working with plaster and acrylic and other materials. The final work can be picked up after varnishing."
      }
    },
    footer: "📢 Register in advance — limited seats!\n✨ Come create, try new things and have a fun summer with us!"
  },
  sv: {
    title: "🎨 Sommarkreativa kurser på konststudion!",
    location: "📍 Stopvägen 38, Bromma",
    phone: "📞 Anmälan per telefon: 073-517-3330",
    description: "Vi inbjuder barn till spännande och mångsidiga aktiviteter i juli! Allt material ingår i priset. Du kan anmäla dig till en fullständig kurs eller komma på drop-in-basis — 270 kr per session.",
    courses: {
      assorted: {
        title: "🧶 1. Blandat",
        dates: "📅 7–11 juli",
        time: "🕚 11:00–13:00",
        age: "För barn 7+",
        price: "💰 Kostnad per vecka: 1300 kr",
        description: "Varje dag — en ny inspirerande aktivitet:",
        schedule: [
          "7 juli (måndag): tovning",
          "8 juli (tisdag): glasdecoupage",
          "9 juli (onsdag): keramikmålning (tallrikar)",
          "10 juli (torsdag): träskedmålning (Khokhloma)",
          "11 juli (fredag): 3D-blommor från termisk mosaik"
        ]
      },
      textile: {
        title: "🧵 2. Textil",
        dates: "📅 14–18 juli",
        time: "🕚 11:00–13:00",
        age: "För barn 7+",
        price: "💰 Kostnad per vecka: 1300 kr",
        description: "I klasser:",
        activities: [
          "Pärlarbete och arbete med pärlor",
          "Tie-dye tekniker i tygmålning, blomtryck",
          "Mjuk leksak sömnad från filt (Prinsessa Groda)",
          "Akrylmålning på tyg, arbete med primer, leksakskapande"
        ],
        note: "‼️ För tie-dye-klasser behöver deltagarna ta med tre t-shirts: två enfärgade svarta/blå/gröna och en vit."
      },
      sculpture: {
        title: "🎭 3. Ramskulptur",
        dates: "📅 21–25 juli",
        time: "🕚 11:00–13:00",
        age: "För barn från 7 år",
        price: "💰 Kostnad per vecka: 1300 kr",
        description: "Lära sig grunderna i tredimensionell form: skulptera, bygga, skapa uttrycksfulla figurer och karaktärer från tråd, folie, papper, arbeta med gips och akryl och andra material. Det slutliga verket kan hämtas efter lackering."
      }
    },
    footer: "📢 Anmäl dig i förväg — begränsat antal platser!\n✨ Kom och skapa, prova nya saker och ha en rolig sommar med oss!"
  }
};

const ceramicsCourse = {
  ru: {
    title: "🏺Курс по керамике «Народная игрушка»",
    dates: "📅 30 июня – 4 июля",
    time: "🕙 Время: с 10:00 до 13:00",
    location: "📍 Адрес: Stopvägen 38",
    age: "👧 Возраст: от 7 лет",
    description: "Приглашаем детей на летний курс по созданию народной глиняной игрушки! За 5 дней участники создадут пять уникальных игрушек в традиционных техниках: дымковская, каргопольская и филимоновская.",
    materials: "🔹 Работа с глиной и обжиг — всё включено",
    note: "⚠️ Готовые изделия можно будет забрать осенью (после сушки и обжига)",
    pricing: "💰 Стоимость:\n– 1700 kr за весь курс\n– Drop-in (разовое занятие): 350 kr",
    registration: "📞 Запись только по предоплате\nРегистрация по телефону: 073-517 33 30"
  },
  en: {
    title: "🏺Ceramics Course «Folk Toy»",
    dates: "📅 June 30 – July 4",
    time: "🕙 Time: 10:00 to 13:00",
    location: "📍 Address: Stopvägen 38",
    age: "👧 Age: from 7 years",
    description: "We invite children to a summer course on creating folk clay toys! Over 5 days, participants will create five unique toys in traditional techniques: Dymkovo, Kargopol and Filimonovo.",
    materials: "🔹 Clay work and firing — everything included",
    note: "⚠️ Finished items can be picked up in autumn (after drying and firing)",
    pricing: "💰 Cost:\n– 1700 kr for the entire course\n– Drop-in (single session): 350 kr",
    registration: "📞 Registration only with prepayment\nRegistration by phone: 073-517 33 30"
  },
  sv: {
    title: "🏺Keramikkurs «Folkleksak»",
    dates: "📅 30 juni – 4 juli",
    time: "🕙 Tid: 10:00 till 13:00",
    location: "📍 Adress: Stopvägen 38",
    age: "👧 Ålder: från 7 år",
    description: "Vi inbjuder barn till en sommarkurs i att skapa folkleksakslera! Under 5 dagar kommer deltagarna att skapa fem unika leksaker i traditionella tekniker: Dymkovo, Kargopol och Filimonovo.",
    materials: "🔹 Lerarbete och bränning — allt ingår",
    note: "⚠️ Färdiga föremål kan hämtas på hösten (efter torkning och bränning)",
    pricing: "💰 Kostnad:\n– 1700 kr för hela kursen\n– Drop-in (enskild session): 350 kr",
    registration: "📞 Registrering endast med förskottsbetalning\nRegistrering per telefon: 073-517 33 30"
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

const Index = ({ currentLang, onLanguageChange }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Hero currentLang={currentLang} onLanguageChange={onLanguageChange} />
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* New Textile Course Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/lovable-uploads/27848801-3443-4335-93f9-c6096c1fc4de.png"
                alt="Textile Course July 14-18"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-xl font-bold text-secondary">
                {textileCourse[currentLang].title}
              </h3>
              
              <div className="space-y-2">
                <p className="text-secondary/80">{textileCourse[currentLang].dates}</p>
                <p className="text-secondary/80">{textileCourse[currentLang].time}</p>
                <p className="text-secondary/80">{textileCourse[currentLang].location}</p>
                <p className="text-secondary/80">{textileCourse[currentLang].phone}</p>
              </div>
              
              <p className="text-secondary/80">
                {textileCourse[currentLang].intro}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">
                  {textileCourse[currentLang].schedule}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="border-l-4 border-primary pl-3">
                    <pre className="whitespace-pre-wrap font-sans text-secondary/80">
                      {textileCourse[currentLang].days.monday}
                    </pre>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <pre className="whitespace-pre-wrap font-sans text-secondary/80">
                      {textileCourse[currentLang].days.tuesday}
                    </pre>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <pre className="whitespace-pre-wrap font-sans text-secondary/80">
                      {textileCourse[currentLang].days.wednesday}
                    </pre>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <pre className="whitespace-pre-wrap font-sans text-secondary/80">
                      {textileCourse[currentLang].days.thursday}
                    </pre>
                  </div>
                  <div className="border-l-4 border-primary pl-3">
                    <pre className="whitespace-pre-wrap font-sans text-secondary/80">
                      {textileCourse[currentLang].days.friday}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">
                  {textileCourse[currentLang].important}
                </h4>
                {textileCourse[currentLang].notes.map((note, idx) => (
                  <p key={idx} className="text-sm text-secondary/80">{note}</p>
                ))}
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">
                  {textileCourse[currentLang].pricing}
                </h4>
                {textileCourse[currentLang].prices.map((price, idx) => (
                  <p key={idx} className="text-sm text-secondary/80">{price}</p>
                ))}
              </div>
              
              <p className="text-center text-secondary font-medium italic">
                {textileCourse[currentLang].footer}
              </p>
            </div>
          </div>
        </div>

        {/* July Courses Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/lovable-uploads/622b8cef-0e22-41ea-a648-6e11365d8c45.png"
                alt="July Courses Schedule"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-xl font-bold text-secondary">
                {julyCourses[currentLang].title}
              </h3>
              
              <div className="space-y-3">
                <p className="text-secondary/80">{julyCourses[currentLang].location}</p>
                <p className="text-secondary/80">{julyCourses[currentLang].phone}</p>
              </div>
              
              <p className="text-secondary/80">
                {julyCourses[currentLang].description}
              </p>
              
              <div className="space-y-6">
                {/* Assorted Course */}
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-secondary mb-2">
                    {julyCourses[currentLang].courses.assorted.title}
                  </h4>
                  <div className="text-sm text-secondary/80 space-y-1">
                    <p>{julyCourses[currentLang].courses.assorted.dates}</p>
                    <p>{julyCourses[currentLang].courses.assorted.time}</p>
                    <p>{julyCourses[currentLang].courses.assorted.age}</p>
                    <p>{julyCourses[currentLang].courses.assorted.price}</p>
                    <p className="font-medium">{julyCourses[currentLang].courses.assorted.description}</p>
                    {julyCourses[currentLang].courses.assorted.schedule.map((item, idx) => (
                      <p key={idx}>• {item}</p>
                    ))}
                  </div>
                </div>

                {/* Textile Course */}
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-secondary mb-2">
                    {julyCourses[currentLang].courses.textile.title}
                  </h4>
                  <div className="text-sm text-secondary/80 space-y-1">
                    <p>{julyCourses[currentLang].courses.textile.dates}</p>
                    <p>{julyCourses[currentLang].courses.textile.time}</p>
                    <p>{julyCourses[currentLang].courses.textile.age}</p>
                    <p>{julyCourses[currentLang].courses.textile.price}</p>
                    <p className="font-medium">{julyCourses[currentLang].courses.textile.description}</p>
                    {julyCourses[currentLang].courses.textile.activities.map((item, idx) => (
                      <p key={idx}>• {item}</p>
                    ))}
                    <p className="text-red-600 font-medium">{julyCourses[currentLang].courses.textile.note}</p>
                  </div>
                </div>

                {/* Sculpture Course */}
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-secondary mb-2">
                    {julyCourses[currentLang].courses.sculpture.title}
                  </h4>
                  <div className="text-sm text-secondary/80 space-y-1">
                    <p>{julyCourses[currentLang].courses.sculpture.dates}</p>
                    <p>{julyCourses[currentLang].courses.sculpture.time}</p>
                    <p>{julyCourses[currentLang].courses.sculpture.age}</p>
                    <p>{julyCourses[currentLang].courses.sculpture.price}</p>
                    <p>{julyCourses[currentLang].courses.sculpture.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg">
                <pre className="whitespace-pre-wrap font-sans text-sm text-secondary">
                  {julyCourses[currentLang].footer}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Ceramics Course Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/lovable-uploads/2286b2de-2c3d-47a3-b70e-4f2609547730.png"
                alt="Clay Toys Ceramics Course"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-xl font-bold text-secondary">
                {ceramicsCourse[currentLang].title}
              </h3>
              
              <div className="space-y-3">
                <p className="text-secondary/80">{ceramicsCourse[currentLang].dates}</p>
                <p className="text-secondary/80">{ceramicsCourse[currentLang].time}</p>
                <p className="text-secondary/80">{ceramicsCourse[currentLang].location}</p>
                <p className="text-secondary/80">{ceramicsCourse[currentLang].age}</p>
              </div>
              
              <p className="text-secondary/80">
                {ceramicsCourse[currentLang].description}
              </p>
              
              <div className="space-y-2">
                <p className="text-secondary/80">{ceramicsCourse[currentLang].materials}</p>
                <p className="text-secondary/80">{ceramicsCourse[currentLang].note}</p>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg">
                <pre className="whitespace-pre-wrap font-sans text-sm text-secondary">
                  {ceramicsCourse[currentLang].pricing}
                </pre>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg">
                <pre className="whitespace-pre-wrap font-sans text-sm text-secondary">
                  {ceramicsCourse[currentLang].registration}
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
