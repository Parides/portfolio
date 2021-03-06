import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import Tablesection from '../components/Tablesection';
import JobsSection from '../components/JobsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import SkillsSection from '../components/SkillsSection';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <FadeIn transitionDuration="700">
        <HeroSection />
      </FadeIn>
      <FadeIn transitionDuration="700">
        <AboutSection />
      </FadeIn>
      <FadeIn transitionDuration="700">
        <SkillsSection />
      </FadeIn>
      <FadeIn transitionDuration="700">
        <ExperienceSection />
      </FadeIn>
      <FadeIn transitionDuration="700">
        <ProjectsSection />
      </FadeIn>
      <FadeIn transitionDuration="700">
        <Footer />
      </FadeIn>
    </div>
  );
}
