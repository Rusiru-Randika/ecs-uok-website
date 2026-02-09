import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CoreEventsSection from "../components/CoreEventsSection";
import AchievementsSection from "../components/AchievementsSection";
import { Helmet } from "react-helmet-async";

export default function LandingPage() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>
          ECSC - Electronics and Computer Science Club | University of Kelaniya
        </title>
        <meta
          name="description"
          content="Welcome to the Electronics and Computer Science Club at the University of Kelaniya. We build, we code, and we innovate together."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <CoreEventsSection />
      <AchievementsSection />
    </div>
  );
}
