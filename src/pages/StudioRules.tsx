import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Language = 'ru' | 'en' | 'sv';

const translations = {
  ru: {
    title: "Правила студии",
    rules: [
      "Приходить за 5-10 минут до начала занятия",
      "Носить одежду, которую не жалко испачкать",
      "Мыть руки перед занятием",
      "Бережно относиться к материалам и инструментам",
      "Убирать за собой рабочее место",
      "Слушать преподавателя и следовать инструкциям",
      "Уважать других учеников и их работы",
      "Выключать звук на телефоне во время занятий"
    ]
  },
  en: {
    title: "Studio Rules",
    rules: [
      "Arrive 5-10 minutes before class starts",
      "Wear clothes that can get dirty",
      "Wash hands before class",
      "Take care of materials and tools",
      "Clean up your workspace",
      "Listen to the teacher and follow instructions",
      "Respect other students and their work",
      "Keep phones on silent during class"
    ]
  },
  sv: {
    title: "Studioregler",
    rules: [
      "Kom 5-10 minuter före lektionen börjar",
      "Bär kläder som kan bli smutsiga",
      "Tvätta händerna före lektionen",
      "Ta hand om material och verktyg",
      "Städa din arbetsplats",
      "Lyssna på läraren och följ instruktioner",
      "Respektera andra elever och deras arbete",
      "Håll telefoner på ljudlös under lektionen"
    ]
  }
};

interface StudioRulesProps {
  currentLang: Language;
}

const StudioRules = ({ currentLang }: StudioRulesProps) => {
  const { title, rules } = translations[currentLang];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary text-white">
                  {index + 1}
                </span>
                <span className="text-lg">{rule}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudioRules;