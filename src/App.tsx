import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

const StrategyReport = lazy(() => import('./components/StrategyReport'));
const BrandManualSection = lazy(() => import('./components/BrandManualSection'));

function App() {
  const isDarkPreview = new URLSearchParams(window.location.search).get('theme') === 'dark';

  return (
    <div className={isDarkPreview ? 'dark-preview' : undefined}>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ResumeSection />
        <PortfolioSection />
        <Suspense fallback={null}>
          <StrategyReport />
          <BrandManualSection />
        </Suspense>
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
