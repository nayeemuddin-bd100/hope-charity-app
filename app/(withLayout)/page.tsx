import Causes from "@/app/components/cause/Causes";
import AboutArea from "@/app/components/home/AboutArea";
import Cta from "@/app/components/home/Cta";
import Events from "@/app/components/home/Events";
import FeaturesArea from "@/app/components/home/FeaturesArea";
import HeroSection from "@/app/components/home/HeroSection";
import Volunteer from "@/app/components/home/Volunteer";

export default function Home() {
  //  h-[calc(100vh-90px)]
  return (
    <div>
      <HeroSection />
      <AboutArea />
      <FeaturesArea />
      <Causes />
      <Cta />
      <Events />
      <Volunteer />
    </div>
  );
}
