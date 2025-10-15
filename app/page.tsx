import HeroSection from "./components/sections/HeroSection";
import IntroSection from "./components/sections/IntroSection";
import VenueSection from "./components/sections/VenueSection";
import AccommodationSection from "./components/sections/AccommodationSection";
import ActivitiesSection from "./components/sections/ActivitiesSection";
import FoodSection from "./components/sections/FoodSection";
import DrinkSection from "./components/sections/DrinkSection";
import LuggageSection from "./components/sections/LuggageSection";
import TransportSection from "./components/sections/TransportSection";
import RulesSection from "./components/sections/RulesSection";
import PriceSection from "./components/sections/PriceSection";
import CTASection from "./components/sections/CTASection";
import DownloadSection from "./components/sections/DownloadSection";
import FloatingCTA from "./components/FloatingCTA";

export default function Home() {
  return (
    <>
      <FloatingCTA />
      <HeroSection />
      <IntroSection />
      <VenueSection />
      <AccommodationSection />
      <ActivitiesSection />
      <FoodSection />
      <DrinkSection />
      <LuggageSection />
      <TransportSection />
      <RulesSection />
      <PriceSection />
      <CTASection />
      <DownloadSection />
    </>
  );
}
