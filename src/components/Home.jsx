import React from 'react';
import AboutSection from './common/AboutSection';
import HeroSection from './common/HeroSection';
import ProjectSection from './common/ProjectSection';
import Recommendations from './common/Recommendations';
import ContactBanner from './common/ContactBanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <Recommendations />
      <ContactBanner />
    </div>
  );
}
