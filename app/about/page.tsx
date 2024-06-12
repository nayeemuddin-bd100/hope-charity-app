import AboutHero from "../components/about/about-hero";
import FeaturesArea from "../components/home/FeaturesArea";
import Volunteer from "../components/home/Volunteer";
import Breadcrumb from "../components/shared/Breadcrumb";

const About = () => {
  return (
    <div>
      <Breadcrumb label="About Us" />
      <AboutHero />
      <FeaturesArea />
      <Volunteer />
    </div>
  );
};

export default About;
