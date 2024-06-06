import Image from "next/image";
import Container from "../shared/Container";
import Heading from "../shared/Heading";

const AboutArea = () => {
  return (
    <div className="relative">
      <Container>
        <div className="relative flex flex-col lg:flex-row  z-20 py-20 lg:py-0">
          <div className="w-full lg:w-5/12 flex justify-center items-center flex-col md:flex-col mx-auto relative  ">
            <div className=" hidden lg:block w-[300px]  h-full bg-btn-gradient absolute top-0"></div>
            <div className="relative w-full  mx-auto   rounded-full overflow-hidden border-4 border-gray-50 shadow-2xl">
              <Image
                alt="About Us Image"
                src={"/images/about-us.jpg"}
                className=" w-[80%] lg:w-full h-full object-cover rounded-full mx-auto"
                width="470"
                height="470"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 flex flex-col justify-center items-center py-32">
            <div className="mb-6">
              <div className="flex justify-center lg:justify-start mt-5 lg:mt-0">
                <Heading label="About Us" gradient />
              </div>
              <h2 className=" text-4xl lg:text-6xl font-bold text-gray-800 text-center md:text-left lg:w-4/5">
                Hope is <span className="text-yellow-500">Nonprofit</span>{" "}
                Organization
                <span className="text-green-500"> For Help</span> Children.
              </h2>
            </div>
            <p className="text-gray-600 mb-8 text-center md:text-left text-lg font-inter px-10 lg:px-0">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout point
              using Lorem Ipsum is that it has.
            </p>
            <div className="space-y-6 flex flex-col md:flex-row justify-around w-full lg:pr-5 items-center gap-5">
              <div className="flex items-center flex-col md:flex-row  gap-y-3">
                <div className="bg-primary-100  rounded-full mr-4 p-8 bg-green-100">
                  <Image
                    src={"/images/ab-icon-1.png"}
                    alt="Save Children Icon"
                    width="54"
                    height="54"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h2 className=" font-semibold text-gray-800 text-4xl">
                    Save Children.
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-y-3 flex-col md:flex-row  ">
                <div className="p-8 rounded-full mr-4 bg-yellow-100">
                  <Image
                    src={"/images/ab-icon-2.png"}
                    alt="Fresh And Clean Water Icon"
                    className=""
                    width="54"
                    height="54"
                  />
                </div>
                <div>
                  <h2 className="text-4xl text-gray-800 font-semibold">
                    Fresh And Clean Water.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

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

export default AboutArea;
