import Image from "next/image";
import Container from "../shared/Container";
import GradientButton from "../shared/GradientButton";
import Heading from "../shared/Heading";
const HeroSection = () => {
  return (
    <div className="w-full h-full bg-[url('/images/home-bg.jpg')] bg-cover bg-center bg-no-repeat mt-[90px] ">
      <Container>
        <div className="relative flex w-[80%] py-24 md:py-32 lg:py-32 text-white flex-col justify-center items-start z-10">
          <Heading label="Go for help" />
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-3xl md:text-7xl lg:text-[100px] font-semibold capitalize leading-none mt-3"
          >
            They are wait for some food.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-xl md:text-2xl lg:text-3xl  mt-8 font-inter"
          >
            In a world of plenty, millions of poor people struggle daily with
            hunger. They dream of simple meals, their hopes tethered to the
            promise of food security.
          </p>

          <GradientButton label="Donate Now" path="/donate" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="hidden md:block absolute top-0 left-0 w-full h-full z-0  "
        >
          <Image
            src={"/images/side-shape.png"}
            alt="slide-shape"
            width={166}
            height={562}
            className="object-contain relative  translate-y-1/3  "
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
