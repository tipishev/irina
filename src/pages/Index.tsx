import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

type Language = 'ru' | 'en' | 'sv';

interface IndexProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const autumnEnrollment = {
  ru: {
    title: "🎨 Открыт набор на курсы по рисунку, живописи и декоративно-прикладному искусству для детей и подростков!",
    description: "Ждём вас на увлекательных занятиях, где каждый сможет развивать творческие навыки и выразить себя через искусство.",
    schedule: {
      title: "📅 Расписание и возрастные группы:",
      groups: {
        little: "👶 Малыши (6–7 лет):\n▪️ Вторник – 15:00",
        school: "👧🧒 Школьники (8–10 лет):\n▪️ Вторник – 17:00\n▪️ Среда – 17:00", 
        family: "👨‍👩‍👧‍👦 Семейная группа (сиблинги, 6–10 лет):\n▪️ Понедельник – 17:00\n▪️ Четверг – 15:00",
        teens: "🧑‍🎨 Подростки (10–16 лет):\n▪️ Среда – 15:00\n▪️ Четверг – 17:00"
      }
    },
    duration: "⏱️ Продолжительность занятий: 1,5 часа",
    pricing: "💰 Абонемент (10 занятий): 2300 крон",
    additional: {
      title: "Дополнительные возможности:",
      single: "🔹 Разовое занятие (по записи, при наличии мест): 250 крон",
      trial: "🔹 Пробный урок (1 час): 150 крон",
      discount: "🔹 Семейная скидка: 10% при записи двух детей из одной семьи"
    },
    materials: {
      title: "🎨 Что нужно брать с собой:",
      basic: "▪️ Базовые материалы (краски, бумага) приносятся самостоятельно",
      special: "▪️ Специальные материалы предоставляются студией"
    },
    curriculum: {
      title: "📚 Чему вы научитесь:",
      drawing: "Рисунок и живопись:\n– Карандаш, уголь, пастель\n– Акварель, гуашь",
      sculpture: "Скульптура:\n– Глина, папье-маше", 
      graphics: "Графика:\n– Тушь, перо",
      crafts: "Декоративно-прикладное искусство"
    },
    contact: {
      address: "📍 Адрес: Stopvägen 38, Bromma",
      phone: "📞 Телефон для записи: 073-517-3330"
    },
    dates: {
      start: "🚀 Начало занятий: 1 сентября 2025 года",
      end: "Окончание осеннего термина: 1 декабря",
      vacation: "Каникулы: 24 октября по 2 ноября"
    },
    rules: "Ознакомьтесь с правилами студии тут:",
    footer: "✨ Не упустите возможность раскрыть творческий потенциал вашего ребёнка в атмосфере вдохновения и творчества!"
  },
  en: {
    title: "🎨 Enrollment open for drawing, painting and decorative arts courses for children and teenagers!",
    description: "We invite you to exciting classes where everyone can develop creative skills and express themselves through art.",
    schedule: {
      title: "📅 Schedule and age groups:",
      groups: {
        little: "👶 Little ones (6–7 years):\n▪️ Tuesday – 15:00",
        school: "👧🧒 School children (8–10 years):\n▪️ Tuesday – 17:00\n▪️ Wednesday – 17:00",
        family: "👨‍👩‍👧‍👦 Family group (siblings, 6–10 years):\n▪️ Monday – 17:00\n▪️ Thursday – 15:00",
        teens: "🧑‍🎨 Teenagers (10–16 years):\n▪️ Wednesday – 15:00\n▪️ Thursday – 17:00"
      }
    },
    duration: "⏱️ Lesson duration: 1.5 hours",
    pricing: "💰 Subscription (10 lessons): 2300 kr",
    additional: {
      title: "Additional options:",
      single: "🔹 Single lesson (by appointment, subject to availability): 250 kr",
      trial: "🔹 Trial lesson (1 hour): 150 kr",
      discount: "🔹 Family discount: 10% when enrolling two children from the same family"
    },
    materials: {
      title: "🎨 What to bring:",
      basic: "▪️ Basic materials (paints, paper) brought independently",
      special: "▪️ Special materials provided by the studio"
    },
    curriculum: {
      title: "📚 What you will learn:",
      drawing: "Drawing and painting:\n– Pencil, charcoal, pastel\n– Watercolor, gouache",
      sculpture: "Sculpture:\n– Clay, papier-mâché",
      graphics: "Graphics:\n– Ink, pen",
      crafts: "Decorative and applied arts"
    },
    contact: {
      address: "📍 Address: Stopvägen 38, Bromma",
      phone: "📞 Registration phone: 073-517-3330"
    },
    dates: {
      start: "🚀 Classes start: September 1, 2025",
      end: "End of autumn term: December 1",
      vacation: "Holidays: October 24 to November 2"
    },
    rules: "Check out the studio rules here:",
    footer: "✨ Don't miss the opportunity to unlock your child's creative potential in an atmosphere of inspiration and creativity!"
  },
  sv: {
    title: "🎨 Anmälan öppen för kurser i teckning, målning och konsthantverk för barn och tonåringar!",
    description: "Vi välkomnar dig till spännande lektioner där alla kan utveckla kreativa färdigheter och uttrycka sig genom konst.",
    schedule: {
      title: "📅 Schema och åldersgrupper:",
      groups: {
        little: "👶 Småbarn (6–7 år):\n▪️ Tisdag – 15:00",
        school: "👧🧒 Skolbarn (8–10 år):\n▪️ Tisdag – 17:00\n▪️ Onsdag – 17:00",
        family: "👨‍👩‍👧‍👦 Familjegrupp (syskon, 6–10 år):\n▪️ Måndag – 17:00\n▪️ Torsdag – 15:00",
        teens: "🧑‍🎨 Tonåringar (10–16 år):\n▪️ Onsdag – 15:00\n▪️ Torsdag – 17:00"
      }
    },
    duration: "⏱️ Lektionslängd: 1,5 timmar",
    pricing: "💰 Prenumeration (10 lektioner): 2300 kr",
    additional: {
      title: "Ytterligare alternativ:",
      single: "🔹 Enstaka lektion (efter bokning, i mån av plats): 250 kr",
      trial: "🔹 Provlektion (1 timme): 150 kr",
      discount: "🔹 Familjerabatt: 10% vid inskrivning av två barn från samma familj"
    },
    materials: {
      title: "🎨 Vad du ska ta med:",
      basic: "▪️ Grundmaterial (färger, papper) tas med självständigt",
      special: "▪️ Specialmaterial tillhandahålls av studion"
    },
    curriculum: {
      title: "📚 Vad du kommer att lära dig:",
      drawing: "Teckning och målning:\n– Penna, kol, pastell\n– Akvarell, gouache",
      sculpture: "Skulptur:\n– Lera, papier-mâché",
      graphics: "Grafik:\n– Bläck, penna",
      crafts: "Dekorativ och tillämpad konst"
    },
    contact: {
      address: "📍 Adress: Stopvägen 38, Bromma",
      phone: "📞 Anmälningstelefon: 073-517-3330"
    },
    dates: {
      start: "🚀 Lektionerna börjar: 1 september 2025",
      end: "Slutet av höstterminen: 1 december",
      vacation: "Lov: 24 oktober till 2 november"
    },
    rules: "Kolla studioreglerna här:",
    footer: "✨ Missa inte möjligheten att låsa upp ditt barns kreativa potential i en atmosfär av inspiration och kreativitet!"
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
        {/* Autumn Enrollment 2025 Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/lovable-uploads/0c0afa43-6d1d-4926-8288-0b2fae26b160.png"
                alt="Autumn 2025 Art Course Enrollment"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-secondary">
                {autumnEnrollment[currentLang].title}
              </h3>
              
              <p className="text-secondary/80">
                {autumnEnrollment[currentLang].description}
              </p>
              
              {/* Schedule Section */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-secondary">
                  {autumnEnrollment[currentLang].schedule.title}
                </h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <pre className="whitespace-pre-wrap font-sans text-secondary/80 text-sm">
                      {autumnEnrollment[currentLang].schedule.groups.little}
                    </pre>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <pre className="whitespace-pre-wrap font-sans text-secondary/80 text-sm">
                      {autumnEnrollment[currentLang].schedule.groups.school}
                    </pre>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <pre className="whitespace-pre-wrap font-sans text-secondary/80 text-sm">
                      {autumnEnrollment[currentLang].schedule.groups.family}
                    </pre>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <pre className="whitespace-pre-wrap font-sans text-secondary/80 text-sm">
                      {autumnEnrollment[currentLang].schedule.groups.teens}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Duration and Pricing */}
              <div className="space-y-2">
                <p className="text-secondary font-medium">{autumnEnrollment[currentLang].duration}</p>
                <p className="text-secondary font-medium">{autumnEnrollment[currentLang].pricing}</p>
              </div>

              {/* Additional Options */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">
                  {autumnEnrollment[currentLang].additional.title}
                </h4>
                <div className="space-y-1 text-sm text-secondary/80">
                  <p>{autumnEnrollment[currentLang].additional.single}</p>
                  <p>{autumnEnrollment[currentLang].additional.trial}</p>
                  <p>{autumnEnrollment[currentLang].additional.discount}</p>
                </div>
              </div>

              {/* Materials Section */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">
                  {autumnEnrollment[currentLang].materials.title}
                </h4>
                <div className="space-y-1 text-sm text-secondary/80">
                  <p>{autumnEnrollment[currentLang].materials.basic}</p>
                  <p>{autumnEnrollment[currentLang].materials.special}</p>
                </div>
              </div>

              {/* Curriculum */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">
                  {autumnEnrollment[currentLang].curriculum.title}
                </h4>
                <div className="space-y-2 text-sm text-secondary/80">
                  <pre className="whitespace-pre-wrap font-sans">{autumnEnrollment[currentLang].curriculum.drawing}</pre>
                  <pre className="whitespace-pre-wrap font-sans">{autumnEnrollment[currentLang].curriculum.sculpture}</pre>
                  <pre className="whitespace-pre-wrap font-sans">{autumnEnrollment[currentLang].curriculum.graphics}</pre>
                  <p>{autumnEnrollment[currentLang].curriculum.crafts}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <p className="text-secondary/80">{autumnEnrollment[currentLang].contact.address}</p>
                <p className="text-secondary/80">{autumnEnrollment[currentLang].contact.phone}</p>
              </div>

              {/* Dates */}
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="space-y-1 text-sm text-secondary">
                  <p className="font-semibold">{autumnEnrollment[currentLang].dates.start}</p>
                  <p>{autumnEnrollment[currentLang].dates.end}</p>
                  <p>{autumnEnrollment[currentLang].dates.vacation}</p>
                </div>
              </div>

              {/* Studio Rules Link */}
              <div className="text-center">
                <p className="text-secondary/80">{autumnEnrollment[currentLang].rules}</p>
                <a 
                  href="/studio-rules" 
                  className="text-primary hover:text-primary/80 underline font-medium"
                >
                  Studio Rules
                </a>
              </div>

              {/* Footer */}
              <p className="text-center text-secondary font-medium italic">
                {autumnEnrollment[currentLang].footer}
              </p>
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
