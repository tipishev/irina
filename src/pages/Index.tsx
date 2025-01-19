import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AboutMe } from "@/components/AboutMe";

type Language = 'ru' | 'en' | 'sv';

interface IndexProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const Index = ({ currentLang, onLanguageChange }: IndexProps) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("/lovable-uploads/218f207e-cb01-4723-b115-53a78f806177.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white/95 min-h-screen">
        <Hero currentLang={currentLang} onLanguageChange={onLanguageChange} />
        <AboutMe currentLang={currentLang} />
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
    </div>
  );
};

export default Index;