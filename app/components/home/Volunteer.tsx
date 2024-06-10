import Container from "../shared/Container";
import Heading from "../shared/Heading";
import VolunteerCard from "./VolunteerCard";

const Volunteer = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col  justify-center items-center mb-10 z-20">
          <Heading label="VOLUNTEER" gradient />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center capitalize">
            Our Great Volunteer
          </h2>
          <p className="text-sm w-full sm:w-3/4 lg:w-2/5 lg:text-lg font-inter text-center mt-3 text-gray-600">
            Volunteers empower communities through their dedication and support.
            Your efforts create meaningful change.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2">
          {/* Volunteer Card */}
          <VolunteerCard
            img="/images/volunteer/demo-1.webp"
            name="Maria Belziana"
            title="Team Lead"
          />
          <VolunteerCard
            img="/images/volunteer/demo-2.jpeg"
            name="Samuel Smith"
            title="Volunteer"
          />{" "}
          <VolunteerCard
            img="/images/volunteer/author-1.jpg"
            name="Kyle Smith"
            title="Volunteer"
          />{" "}
          <VolunteerCard
            img="/images/volunteer/author-2.jpg"
            name="Will sentence"
            title="Volunteer"
          />
        </div>
      </Container>
    </div>
  );
};

export default Volunteer;
