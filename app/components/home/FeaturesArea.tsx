import Container from "../shared/Container";
import GradientButton from "../shared/GradientButton";
import Heading from "../shared/Heading";
import FeaturesCard from "./FeaturesCard";

const FeaturesArea = () => {
  return (
    <div className="bg-primary w-full">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center py-20">
          {/* left panel */}
          <div className="flex flex-col  md:justify-start  md:items-start w-full md:w-5/12 gap-y-6 bg-[url('/images/feat-bg.png')] bg-contain bg-left bg-no-repeat ">
            <div>
              <Heading label="Features" gradient className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white  ">
              The great journey to end poverty for good begins with a child.
            </h2>
            <p className="font-inter text-gray-500">
              Our charity application provides real-time donation tracking,
              impact reports, and a secure payment gateway to ensure safe and
              transparent contributions.
            </p>
            <div>
              <GradientButton label="Donate Now" path="/donate" />
            </div>
          </div>

          {/* Right panel */}
          <div className="grid grid-cols-1  xs:grid-cols-2 md:ml-5 gap-4 py-5 md:py-0  w-full md:w-7/12">
            <FeaturesCard
              icon="/images/feat-icon-1.png"
              title="cancer treatment"
              borderColor="border-green-200"
            />{" "}
            <FeaturesCard
              icon="/images/feat-icon-2.png"
              title="Hospital build"
              borderColor="border-yellow-200"
            />{" "}
            <FeaturesCard
              icon="/images/feat-icon-3.png"
              title="Environment recycle"
              borderColor="border-green-200 xs:border-yellow-200"
            />{" "}
            <FeaturesCard
              icon="/images/feat-icon-4.png"
              title="Food & build home"
              borderColor="border-yellow-200 xs:border-green-200"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturesArea;
