import { Link } from "react-router-dom";
import christmasStudio1 from "@/assets/christmas-studio-1.jpg";
import christmasStudio2 from "@/assets/christmas-studio-2.jpg";

type Language = 'ru' | 'en' | 'sv';

interface ChristmasPhotoshootProps {
  currentLang: Language;
  showLink?: boolean;
}

const content = {
  ru: {
    title: "🎄 Новогодние фотосъёмки",
    description: "Студия готова для новогодних фотосъёмок!",
    availability: "Расписание доступных слотов:",
    moreDetails: "Подробнее"
  },
  en: {
    title: "🎄 Christmas Photoshoots",
    description: "The studio is ready for Christmas photoshoots!",
    availability: "Available time slots:",
    moreDetails: "More details"
  },
  sv: {
    title: "🎄 Julfotografering",
    description: "Studion är redo för julfotografering!",
    availability: "Tillgängliga tider:",
    moreDetails: "Mer information"
  }
};

export const ChristmasPhotoshoot = ({ currentLang, showLink = false }: ChristmasPhotoshootProps) => {
  return (
    <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg shadow-lg p-8 border-2 border-red-200">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/3 space-y-4">
          <img
            src={christmasStudio1}
            alt="Christmas studio setup"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={christmasStudio2}
            alt="Christmas studio setup"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4">
          <h3 className="text-3xl font-bold text-red-700">
            {content[currentLang].title}
          </h3>
          <p className="text-xl font-semibold text-green-700">
            {content[currentLang].description}
          </p>
          
          {showLink && (
            <Link 
              to="/jul"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
            >
              {content[currentLang].moreDetails} →
            </Link>
          )}
          
          <p className="text-secondary/80 font-medium">
            {content[currentLang].availability}
          </p>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md border border-red-200">
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnkP2Dt2OZp8VIOEwmB9yn0GW03S8EB2t9SxhcoX7fn--CO5_rTlmGClUY2lQ_ggbW7v5Lzslfm4El/pubhtml?gid=0&single=true&widget=true&headers=false"
              title="Christmas photoshoot availability"
              width="100%"
              height="100%"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
