import Image from "next/image";
import Container from "../shared/Container";
import Heading from "../shared/Heading";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className="py-10 md:py-24">
      <Container>
        <div className="relative">
          {/* Heading */}

          <div className="flex flex-col  justify-center items-center mb-10 z-20">
            <Heading label="Events" gradient />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center capitalize">
              Our Upcoming Events
            </h2>
            <p className="text-sm w-full sm:w-3/4 lg:w-2/5 lg:text-lg font-inter text-center mt-3 text-gray-600">
              Join us for our upcoming event to support our charitable causes.
              Together, we can make a difference in the lives of those in need.
            </p>
          </div>

          {/* Events */}

          <div className="flex flex-col justify-center items-center md:px-10 mt-10 gap-8 ">
            <div data-aos="fade-up" data-aos-duration="1000">
              <EventCard
                img="/images/events/event-1.jpg"
                title="Fundraising event that could change some poor children."
                desc="lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
              />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000">
              <EventCard
                img="/images/events/event-2.jpg"
                title="Many Children are suffering a lot for food."
                desc="lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <EventCard
                img="/images/events/event-3.jpg"
                title="Be kind for the poor people and the kids."
                desc="lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
              />
            </div>
          </div>

          {/* Left Icon */}

          <div className=" absolute hidden lg:block top-0 left-0  h-full -z-20  ">
            <Image
              src={"/images/events/shape-1.png"}
              alt="slide-shape"
              width={307}
              height={258}
              className="object-cover w-[95%]  -z-10 "
            />
          </div>

          <div className=" absolute hidden lg:block  bottom-0 right-0 translate-y-1/4 h-[50%] -z-20  ">
            <Image
              src={"/images/events/shape-2.png"}
              alt="slide-shape"
              width={307}
              height={258}
              className="object-cover w-full h-full  -z-10 "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Events;
