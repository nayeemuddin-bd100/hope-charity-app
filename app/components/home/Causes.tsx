import Container from "../shared/Container";
import Heading from "../shared/Heading";
import CauseCard from "./CauseCard";

const Causes = () => {
  return (
    <div className="py-10">
      <Container>
        {/* Causes Header */}
        <div className="flex flex-col justify-center items-center gap-y-5">
          <Heading label="Causes" gradient />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center capitalize">
            Latest caused of hope
          </h2>
          <p className="text-lg lg:text-xl font-inter text-gray-600">
            Supporting Communities, Alleviating Poverty, and Promoting Health
          </p>
        </div>
        {/* Causes Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
          {/* Cause Card */}
          <CauseCard
            image="/images/cause/cause-1.png"
            title=" Financial help for poor families"
            desc="Providing essential financial assistance to uplift and support poor families in need"
            goal="100,000"
            raise="50,000"
          />
          <CauseCard
            image="/images/cause/cause-2.jpg"
            title="Education for Poor Children"
            desc="Providing access to quality education for children from low-income families."
            goal="200,000"
            raise="150,000"
          />
          <CauseCard
            image="/images/cause/cause-3.jpg"
            title="Send Child to School for a Year"
            desc="Providing the necessary resources and support to ensure a child from a poor family can attend school for an entire year."
            goal="100,000"
            raise="80,000"
          />
          <CauseCard
            image="/images/cause/cause-4.jpg"
            title="Food And Home for Children"
            desc="Offering nutritious meals and safe housing to ensure the well-being and development of children in need."
            goal="400,000"
            raise="150,000"
          />
          <CauseCard
            image="/images/cause/cause-5.jpg"
            title="Recycling For Charity"
            desc="Turning recyclable materials into funds to support charitable causes and make a positive environmental impact."
            goal="380,000"
            raise="220,000"
          />
          <CauseCard
            image="/images/cause/cause-6.jpg"
            title="Pure Water For The World"
            desc="Bringing clean and safe drinking water to communities worldwide, ensuring better health and a brighter future for all."
            goal="470,000"
            raise="150,000"
          />
        </div>{" "}
      </Container>
    </div>
  );
};

export default Causes;
