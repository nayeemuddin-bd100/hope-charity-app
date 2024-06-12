import Image from "next/image";
import Container from "../shared/Container";
import Heading from "../shared/Heading";

const AboutHero = () => {
  return (
    <div className="relative py-10">
      <Container>
        <div className="relative flex flex-col lg:flex-row  z-20 py-10 lg:py-0">
          {/* Left Side Image */}
          <div className="w-full lg:w-5/12 flex justify-center items-center flex-col md:flex-col mx-auto relative  ">
            <div className="relative w-full xs:w-[80%] sm:w-[80%] lg:w-full  mx-auto ">
              <Image
                alt="About Us Image"
                src={"/images/about-us-page.jpg"}
                className=" w-[80%] lg:w-full h-full object-cover  mx-auto "
                width="470"
                height="470"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-7/12 lg:px-5 lg:ml-5 flex flex-col justify-center items-center py-10">
            <div className="mb-6">
              <div className="flex justify-center lg:justify-start mt-5 lg:mt-0">
                <Heading label="About Us" gradient />
              </div>
              <h2 className=" text-3xl lg:text-4xl font-bold text-gray-800 text-center md:text-left lg:w-4/5">
                Hope is <span className="text-yellow-500">Nonprofit</span>{" "}
                Organization
                <span className="text-green-500"> For Help</span> Children.
              </h2>
            </div>
            <p className="text-gray-600 mb-8 text-center md:text-left  font-inter px-10 lg:px-0">
              Dedicated to empowering children, Hope is a nonprofit organization
              providing education, healthcare, and emotional support. We create
              nurturing environments where every child can thrive and reach
              their full potential. Join us in making a lasting difference in
              children&apos;s lives worldwide.
            </p>

            <div className="flex flex-col gap-10 md:flex-row lg:gap-5 justify-between items-center">
              <div className="flex flex-col justify-center items-center gap-5 lg:gap-2">
                <div className="w-[100px] h-[100px] overflow-hidden relative rounded-full ">
                  <Image
                    src={"/images/ab-icon-1.png"}
                    alt="icon"
                    width={100}
                    height={100}
                    className="bg-green-100 p-4 rounded-full object-cover w-[98px] h-[98px]"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 text-center">
                  Save Children
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 lg:gap-2">
                <div className="w-[100px] h-[100px] overflow-hidden rounded-full ">
                  <Image
                    src={"/images/ab-icon-2.png"}
                    alt="icon"
                    width={100}
                    height={100}
                    className="bg-yellow-100 p-4 rounded-full object-cover w-[98px] h-[98px]"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 capitalize text-center">
                  Fresh and clean water
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right shape */}
        <div className="">
          <div className="hidden lg:block absolute top-0 right-0  h-full z-0  ">
            <Image
              src={"/images/side-shape.png"}
              alt="slide-shape"
              width={166}
              height={562}
              className="object-contain h-full transform scale-x-[-1]  "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutHero;
