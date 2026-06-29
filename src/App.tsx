import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import StrategyReport from './components/StrategyReport';
import BrandManualSection from './components/BrandManualSection';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ResumeSection />
        <PortfolioSection />
        <StrategyReport />
        <BrandManualSection />
        <Contact />
      </main>
    </>
  );
}

export default App;
