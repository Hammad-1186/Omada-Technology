import WelcomeNextaVistaSection from "./components/landing-page/AboutSection";
import ExpertiseSection from "./components/landing-page/ExpertiseSection";
import GetStartedSection from "./components/landing-page/GetStartedSection";
import HeroSection from "./components/landing-page/HeroSection";
import WhyNexaVistaSection from "./components/landing-page/ServicesSection";
import TestimonialsSection from "./components/landing-page/TestimonialsSection";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeNextaVistaSection/>
      <ExpertiseSection />
      <WhyNexaVistaSection />
      <GetStartedSection />
      <TestimonialsSection />
    </div>
  );
}