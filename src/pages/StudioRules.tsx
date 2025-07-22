import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageSelector } from "@/components/LanguageSelector";

type Language = 'ru' | 'en' | 'sv';

const translations = {
  ru: {
    title: "📚 Правила студии",
    rules: [
      {
        title: "⏰ Приходите вовремя",
        text: "Пожалуйста, приходите за 5 минут до начала занятия, но не раньше — это важно для комфортной подготовки."
      },
      {
        title: "👕 Одежда для занятий",
        text: "Мы работаем с красками, поэтому студия не несёт ответственности за испачканную одежду. Надевайте то, что не жалко запачкать."
      },
      {
        title: "📵 Телефоны на занятии",
        text: "Во время урока не пользуемся телефоном. Исключение — если нужно срисовать или сфотографировать задание."
      },
      {
        title: "👟🧑‍🎨 Сменная обувь и фартук — обязательно",
        text: "Для занятий необходимы сменная обувь и фартук — это вопрос гигиены и порядка в студии."
      },
      {
        title: "🧼 Гигиена",
        text: "Перед началом занятия все ученики моют руки."
      },
      {
        title: "🤧 Если ребёнок болен — оставайтесь дома",
        text: "При насморке, кашле или других признаках болезни — пожалуйста, оставьте ребёнка дома до полного выздоровления."
      },
      {
        title: "🎨 Бережное отношение к материалам",
        text: "Все инструменты и материалы предоставляет студия. Просим обращаться с ними аккуратно и бережно."
      },
      {
        title: "📸 Фотосъёмка",
        text: "Во время занятий возможна съёмка процесса и работ для сайта и соцсетей. 📄 Письменное согласие заполняется родителями (бланк предоставляет студия)."
      },
      {
        title: "🍎🥤 Перекусы",
        text: "Разрешены только фрукты и вода. Орехи и сладости — не допускаются. Если хотите угостить — угощение должно быть для всех (в группе 6–8 детей)."
      },
      {
        title: "🤝 Уважительное поведение",
        text: "В студии царит доброжелательная атмосфера. Уважаем друг друга и работы других учеников: 🚫 не трогаем чужие рисунки и материалы."
      },
      {
        title: "🖌️ Завершаем начатое",
        text: "Каждую начатую работу необходимо завершить, прежде чем приступить к новой."
      },
      {
        title: "🚫🎠 Учебный процесс — не игровая зона",
        text: "Студия — это пространство для творчества и обучения. Не бегаем, не трогаем натюрморты и другие объекты без разрешения."
      },
      {
        title: "🧽🪣 Уборка рабочего места",
        text: "После занятия каждый сам убирает за собой: моет кисти, палитры, складывает краски."
      },
      {
        title: "💸 Материальная ответственность",
        text: "Если ученик повредит имущество студии, ответственность несут родители. Например: сломал стул, качаясь на нём — покупаем новый в IKEA."
      },
      {
        title: "🚫👨‍👩‍👧 Присутствие родителей",
        text: "Родители на занятия не допускаются. Это важно для концентрации ребёнка — он учится лучше один на один с преподавателем. «Я не прихожу к вам на работу — пожалуйста, не приходите ко мне на урок.» Для общения предусмотрены дни открытых дверей и личные встречи по договорённости. Исключение — дети с особенностями, когда постоянное присутствие необходимо по технике безопасности (например, при работе с горячим или острым)."
      },
      {
        title: "📦 Материалы на учебный год",
        text: "Список базовых материалов, которые нужно будет сдать, предоставляется отдельно."
      },
      {
        title: "💳 Оплата и пропуски",
        text: "📌 Запись на курс: Запись возможна только после 100% предоплаты абонемента. Оплата — по счёту (фактуре) или через рабочий Swish студии (обязательно указывайте имя и фамилию ребёнка). 📸 Фото чека отправляется лично."
      },
      {
        title: "🎟 Разовое посещение (Drop-in)",
        text: "Возможно только по предварительной записи. Оплата — на месте, через Swish."
      },
      {
        title: "🚫 Отмена занятия со стороны студии",
        text: "Если студия отменяет урок, будет назначен день компенсации."
      },
      {
        title: "❗️Пропуск по инициативе ученика",
        text: "Если вы не предупредили минимум за 3 часа до начала занятия — 📍урок считается проведённым и списывается."
      },
      {
        title: "📚 Пропуск урока",
        text: "🎨 Если работа уже начата — необходимо договориться о дополнительном посещении другой группы (при наличии мест). 🧵 Если тема ещё не начата — просто продолжаете с классом со следующей темы."
      },
      {
        title: "⏸ Заморозка абонемента",
        text: "Абонемент можно заморозить, предупредив студию за 24 часа до урока. Если вы не успели пройти все занятия за термин, они переносятся на следующий или компенсируются по договорённости."
      }
    ]
  },
  en: {
    title: "📚 Studio Rules",
    rules: [
      {
        title: "⏰ Arrive on time",
        text: "Please arrive 5 minutes before class starts, but not earlier — this is important for comfortable preparation."
      },
      {
        title: "👕 Class clothing",
        text: "We work with paints, so the studio is not responsible for stained clothing. Wear clothes you don't mind getting dirty."
      },
      {
        title: "📵 Phones during class",
        text: "Don't use phones during lessons. Exception — if you need to copy or photograph an assignment."
      },
      {
        title: "👟🧑‍🎨 Change of shoes and apron — mandatory",
        text: "Change of shoes and an apron are required for classes — this is a matter of hygiene and order in the studio."
      },
      {
        title: "🧼 Hygiene",
        text: "All students wash their hands before starting the lesson."
      },
      {
        title: "🤧 If your child is sick — stay home",
        text: "If you have a runny nose, cough, or other signs of illness — please keep your child at home until fully recovered."
      },
      {
        title: "🎨 Careful handling of materials",
        text: "All tools and materials are provided by the studio. Please handle them carefully and gently."
      },
      {
        title: "📸 Photography",
        text: "Photography of the process and work for the website and social media is possible during classes. 📄 Written consent is filled out by parents (form provided by the studio)."
      },
      {
        title: "🍎🥤 Snacks",
        text: "Only fruits and water are allowed. Nuts and sweets are not permitted. If you want to treat others — treats should be for everyone (6–8 children in a group)."
      },
      {
        title: "🤝 Respectful behavior",
        text: "A friendly atmosphere reigns in the studio. We respect each other and other students' work: 🚫 don't touch other people's drawings and materials."
      },
      {
        title: "🖌️ Finish what you start",
        text: "Each started work must be completed before starting a new one."
      },
      {
        title: "🚫🎠 Learning process — not a play area",
        text: "The studio is a space for creativity and learning. Don't run around, don't touch still lifes and other objects without permission."
      },
      {
        title: "🧽🪣 Cleaning the workspace",
        text: "After class, everyone cleans up after themselves: wash brushes, palettes, put away paints."
      },
      {
        title: "💸 Material responsibility",
        text: "If a student damages studio property, parents are responsible. For example: broke a chair by rocking on it — buy a new one at IKEA."
      },
      {
        title: "🚫👨‍👩‍👧 Parent presence",
        text: "Parents are not allowed in classes. This is important for the child's concentration — they learn better one-on-one with the teacher. 'I don't come to your work — please don't come to my lesson.' Open days and personal meetings are provided for communication by arrangement. Exception — children with special needs when constant presence is necessary for safety (e.g., when working with hot or sharp objects)."
      },
      {
        title: "📦 Materials for the school year",
        text: "A list of basic materials that need to be provided is given separately."
      },
      {
        title: "💳 Payment and absences",
        text: "📌 Course registration: Registration is only possible after 100% prepayment of the subscription. Payment — by invoice or through the studio's business Swish (must specify child's first and last name). 📸 Photo of receipt is sent personally."
      },
      {
        title: "🎟 Drop-in visits",
        text: "Only possible by prior booking. Payment — on-site, through Swish."
      },
      {
        title: "🚫 Class cancellation by the studio",
        text: "If the studio cancels a lesson, a compensation day will be scheduled."
      },
      {
        title: "❗️ Student-initiated absence",
        text: "If you didn't notify at least 3 hours before the lesson starts — 📍 the lesson is considered conducted and charged."
      },
      {
        title: "📚 Missing a lesson",
        text: "🎨 If work has already started — need to arrange additional attendance in another group (if places available). 🧵 If the topic hasn't started yet — just continue with the class from the next topic."
      },
      {
        title: "⏸ Subscription freeze",
        text: "Subscription can be frozen by notifying the studio 24 hours before the lesson. If you didn't complete all lessons in the term, they are transferred to the next one or compensated by arrangement."
      }
    ]
  },
  sv: {
    title: "📚 Studioregler",
    rules: [
      {
        title: "⏰ Kom i tid",
        text: "Kom gärna 5 minuter före lektionen börjar, men inte tidigare — detta är viktigt för bekväm förberedelse."
      },
      {
        title: "👕 Kläder för lektioner",
        text: "Vi arbetar med färger, så studion tar inget ansvar för fläckade kläder. Ha på dig kläder som kan bli smutsiga."
      },
      {
        title: "📵 Telefoner under lektionen",
        text: "Använd inte telefon under lektionerna. Undantag — om du behöver rita av eller fotografera en uppgift."
      },
      {
        title: "👟🧑‍🎨 Ombyte och förkläde — obligatorisk",
        text: "Ombyten skor och förkläde krävs för lektioner — detta är en fråga om hygien och ordning i studion."
      },
      {
        title: "🧼 Hygien",
        text: "Alla elever tvättar händerna innan lektionen börjar."
      },
      {
        title: "🤧 Om barnet är sjukt — stanna hemma",
        text: "Vid snuva, hosta eller andra sjukdomstecken — låt barnet stanna hemma tills det är helt friskt."
      },
      {
        title: "🎨 Försiktig hantering av material",
        text: "Alla verktyg och material tillhandahålls av studion. Var försiktig och varsam med dem."
      },
      {
        title: "📸 Fotografering",
        text: "Fotografering av processen och arbeten för hemsidan och sociala medier är möjlig under lektionerna. 📄 Skriftligt samtycke fylls i av föräldrarna (blankett tillhandahålls av studion)."
      },
      {
        title: "🍎🥤 Mellanmål",
        text: "Endast frukt och vatten är tillåtet. Nötter och godis är inte tillåtet. Om du vill bjuda — bjudningen ska vara för alla (6–8 barn i gruppen)."
      },
      {
        title: "🤝 Respektfullt beteende",
        text: "En vänlig atmosfär råder i studion. Vi respekterar varandra och andra elevers arbete: 🚫 rör inte andras teckningar och material."
      },
      {
        title: "🖌️ Slutför det du börjar",
        text: "Varje påbörjat arbete måste slutföras innan du börjar ett nytt."
      },
      {
        title: "🚫🎠 Lärandeprocess — inte lekplats",
        text: "Studion är ett utrymme för kreativitet och lärande. Spring inte omkring, rör inte stilleben och andra objekt utan tillstånd."
      },
      {
        title: "🧽🪣 Städa arbetsplatsen",
        text: "Efter lektionen städar alla efter sig själva: tvätta penslar, paletter, packa undan färger."
      },
      {
        title: "💸 Materiellt ansvar",
        text: "Om en elev skadar studioegendom är föräldrarna ansvariga. Till exempel: gick sönder en stol genom att gunga på den — köp en ny på IKEA."
      },
      {
        title: "🚫👨‍👩‍👧 Föräldrars närvaro",
        text: "Föräldrar är inte tillåtna på lektioner. Detta är viktigt för barnets koncentration — de lär sig bättre i ensamhet med läraren. 'Jag kommer inte till ditt arbete — kom inte till min lektion.' Öppna dagar och personliga möten tillhandahålls för kommunikation efter överenskommelse. Undantag — barn med särskilda behov när konstant närvaro är nödvändig för säkerheten (t.ex. vid arbete med varma eller vassa föremål)."
      },
      {
        title: "📦 Material för läsåret",
        text: "En lista över grundläggande material som behöver tillhandahållas ges separat."
      },
      {
        title: "💳 Betalning och frånvaro",
        text: "📌 Kursregistrering: Registrering är endast möjlig efter 100% förskottsbetalning av abonnemanget. Betalning — via faktura eller genom studions företags-Swish (måste ange barnets för- och efternamn). 📸 Foto av kvitto skickas personligen."
      },
      {
        title: "🎟 Enstaka besök (Drop-in)",
        text: "Endast möjligt efter förbokning. Betalning — på plats, via Swish."
      },
      {
        title: "🚫 Lektionsinställning från studion",
        text: "Om studion ställer in en lektion kommer en kompensationsdag att schemaläggas."
      },
      {
        title: "❗️ Elevinitierad frånvaro",
        text: "Om du inte meddelade minst 3 timmar före lektionens början — 📍 anses lektionen genomförd och debiterad."
      },
      {
        title: "📚 Missa en lektion",
        text: "🎨 Om arbetet redan har börjat — behöver arrangera ytterligare närvaro i en annan grupp (om platser finns). 🧵 Om ämnet inte har börjat än — fortsätt bara med klassen från nästa ämne."
      },
      {
        title: "⏸ Abonnemangspaus",
        text: "Abonnemanget kan pausas genom att meddela studion 24 timmar före lektionen. Om du inte slutförde alla lektioner under terminen överförs de till nästa eller kompenseras efter överenskommelse."
      }
    ]
  }
};

interface StudioRulesProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const StudioRules = ({ currentLang, onLanguageChange }: StudioRulesProps) => {
  const { title, rules } = translations[currentLang];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="absolute top-4 right-4">
        <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
      </div>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{rule.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{rule.text}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudioRules;