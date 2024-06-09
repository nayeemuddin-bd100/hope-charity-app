import AboutArea from "./components/home/AboutArea";
import Causes from "./components/home/Causes";
import Events from "./components/home/Events";
import FeaturesArea from "./components/home/FeaturesArea";
import HeroSection from "./components/home/HeroSection";
import Volunteer from "./components/home/Volunteer";

export default function Home() {
  //  h-[calc(100vh-90px)]
  return (
    <div>
      <HeroSection />
      <AboutArea />
      <FeaturesArea />
      <Causes />
      <Volunteer />
      <Events />
    </div>
  );
}
