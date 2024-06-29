import Image from "next/image";
import Container from "../shared/Container";
import Heading from "../shared/Heading";

const AboutArea = () => {
  return (
    <div className="relative">
      <Container>
        <div className="relative flex flex-col lg:flex-row  z-20 py-20 lg:py-0">
          {/* Left Side Image */}
          <div className="w-full lg:w-5/12 flex justify-center items-center flex-col md:flex-col mx-auto relative  ">
            <div className=" hidden lg:block w-[300px]  h-full bg-btn-gradient absolute top-0"></div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="relative w-full  mx-auto rounded-full overflow-hidden "
            >
              <Image
                alt="About Us Image"
                src={"/images/about-us.jpg"}
                className=" w-[80%] sm:w-[60%] lg:w-full h-full object-cover rounded-full mx-auto border-8 shadow-none border-stone-300"
                width="470"
                height="470"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-7/12 lg:px-5 lg:ml-5 flex flex-col justify-center items-center py-24">
            <div className="mb-6">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex justify-center lg:justify-start mt-5 lg:mt-0"
              >
                <Heading label="About Us" gradient />
              </div>
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className=" text-4xl lg:text-6xl font-bold text-gray-800 text-center md:text-left lg:w-4/5"
              >
                Hope is <span className="text-yellow-500">Nonprofit</span>{" "}
                Organization
                <span className="text-green-500"> For Help</span> Children.
              </h2>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-gray-600 mb-8 text-center md:text-left text-lg font-inter px-10 lg:px-0"
            >
              Dedicated to empowering children, Hope is a nonprofit organization
              providing education, healthcare, and emotional support. We create
              nurturing environments where every child can thrive and reach
              their full potential. Join us in making a lasting difference in
              children&apos;s lives worldwide.
            </p>

            <div className="flex flex-col gap-10 md:flex-row lg:gap-0 justify-around items-center">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:mr-5">
                <div className="w-[100px] h-[100px] overflow-hidden relative rounded-full ">
                  <Image
                    src={"/images/ab-icon-1.png"}
                    alt="icon"
                    width={100}
                    height={100}
                    className="bg-green-100 p-4 rounded-full object-cover w-[98px] h-[98px]"
                  />
                </div>
                <h2
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  className="text-4xl font-bold text-gray-800"
                >
                  Save Children
                </h2>
              </div>
              <div className="flex flex-col lg:flex-row justify-start items-center gap-5 lg:mr-5">
                <div className="w-[100px] h-[100px] overflow-hidden rounded-full ">
                  <Image
                    src={"/images/ab-icon-2.png"}
                    alt="icon"
                    width={100}
                    height={100}
                    className="bg-yellow-100 p-4 rounded-full object-cover w-[98px] h-[98px]"
                  />
                </div>
                <h2
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  className="text-4xl font-bold text-gray-800 capitalize"
                >
                  Fresh and clean water
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right shape */}
        <div className="">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="hidden lg:block absolute top-0 right-0  h-full z-0  "
          >
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

export default AboutArea;
