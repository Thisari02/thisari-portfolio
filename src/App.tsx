import { Suspense, lazy, useState } from 'react';
import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

const AboutSection = lazy(() => import('./components/AboutSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ExperienceTimeline = lazy(() => import('./components/ExperienceTimeline'));
const ProjectsGrid = lazy(() => import('./components/ProjectsGrid'));
const EducationCertifications = lazy(() => import('./components/EducationCertifications'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const AchievementsTestimonials = lazy(() => import('./components/AchievementsTestimonials'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <PageLoader onComplete={() => setLoading(false)} />
      {!loading && (
        <div id="portfolio-app" className="bg-[#050816] min-h-screen text-slate-100 selection:bg-sky-500/20 selection:text-sky-300 font-sans antialiased relative">
          <CustomCursor />
          <Navigation />
          <main className="relative z-10">
            <Hero />
            <Suspense fallback={null}>
              <AboutSection />
              <SkillsSection />
              <EducationCertifications />
              <ExperienceTimeline />
              <ProjectsGrid />
              <ServicesSection />
              <AchievementsTestimonials />
              <ContactSection />
              <Footer />
            </Suspense>
          </main>

        </div>
      )}
    </>
  );
}
