import AboutArea from "./components/home/AboutArea";
import FeaturesArea from "./components/home/FeaturesArea";
import HeroSection from "./components/home/HeroSection";

export default function Home() {
  //  h-[calc(100vh-90px)]
  return (
    <div>
      <HeroSection />
      <AboutArea />
      <FeaturesArea />
    </div>
  );
}
