import AboutArea from "./components/home/AboutArea";
import HeroSection from "./components/home/HeroSection";

export default function Home() {
  //  h-[calc(100vh-90px)]
  return (
    <div>
      <HeroSection />
      <AboutArea />
    </div>
  );
}
