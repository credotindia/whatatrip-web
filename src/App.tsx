import React, { useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import FeaturedExperiences from './components/FeaturedExperiences';
import ExperienceShowcase from './components/ExperienceShowcase';
import CulturalImmersionForm from './components/CulturalImmersionForm';
import AuthenticStories from './components/AuthenticStories';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'experiences':
        return <ExperienceShowcase />;
      case 'connect':
        return <CulturalImmersionForm />;
      default:
        return (
          <>
            <Hero />
            <FeaturedExperiences />
            <AuthenticStories />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="relative">
        {renderContent()}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;