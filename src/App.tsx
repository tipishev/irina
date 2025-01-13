import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import PhotographyPortfolio from './pages/PhotographyPortfolio';
import ArtPortfolio from './pages/ArtPortfolio';
import MakeupPortfolio from './pages/MakeupPortfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portfolio/photography" element={<PhotographyPortfolio />} />
        <Route path="/portfolio/art" element={<ArtPortfolio />} />
        <Route path="/portfolio/makeup" element={<MakeupPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;