import { Routes, Route, useSearchParams, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import ArtPortfolio from "./pages/ArtPortfolio";
import PhotographyPortfolio from "./pages/PhotographyPortfolio";
import MakeupPortfolio from "./pages/MakeupPortfolio";
import StudioRules from "./pages/StudioRules";
import ArtSchedule from "./pages/ArtSchedule";
import { useEffect, useState } from "react";

type Language = 'ru' | 'en' | 'sv';

function App() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const langParam = searchParams.get('lang');
    return (langParam as Language) || 'ru';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('lang', lang);
    navigate(`${window.location.pathname}?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    const langParam = searchParams.get('lang');
    if (langParam && ['ru', 'en', 'sv'].includes(langParam)) {
      setCurrentLang(langParam as Language);
    }
  }, [searchParams]);

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={
            <Index 
              currentLang={currentLang} 
              onLanguageChange={handleLanguageChange} 
            />
          } 
        />
        <Route 
          path="/portfolio/art" 
          element={
            <ArtPortfolio 
              currentLang={currentLang} 
              onLanguageChange={handleLanguageChange}
            />
          } 
        />
        <Route 
          path="/portfolio/photography" 
          element={
            <PhotographyPortfolio 
              currentLang={currentLang} 
              onLanguageChange={handleLanguageChange}
            />
          } 
        />
        <Route 
          path="/portfolio/makeup" 
          element={
            <MakeupPortfolio 
              currentLang={currentLang} 
              onLanguageChange={handleLanguageChange}
            />
          } 
        />
        <Route 
          path="/studio-rules" 
          element={
            <StudioRules 
              currentLang={currentLang} 
            />
          } 
        />
        <Route 
          path="/art-schedule" 
          element={
            <ArtSchedule 
              currentLang={currentLang}
              onLanguageChange={handleLanguageChange}
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;