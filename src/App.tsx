import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="bg-grid-pattern" style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar />
      <main>
        <Hero />
        <CoursesSection
          sectionTitle="Autonomous Learning Pathways"
          sectionSubtitle="Direct API-streamed masterclasses engineered to accelerate real-world execution. Resilient pricing synced with your detected geo-locale."
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
