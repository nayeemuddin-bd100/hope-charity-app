import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
import Heading from "../shared/Heading";
import EventCard from "./EventCard";

const Events = ({ showMoreBtn = true }) => {
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
                desc="Join us for a powerful fundraising event dedicated to transforming the lives of impoverished children. Together, we can make a lasting impact, providing essential resources and opportunities to those who need it most. Your support could be the change they've been waiting for."
              />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000">
              <EventCard
                img="/images/events/event-2.jpg"
                title="Many Children are suffering a lot for food."
                desc="Countless children are enduring severe hunger every day, struggling to find their next meal. This urgent situation calls for immediate action to provide the nourishment they desperately need. Together, we can help alleviate their suffering and bring hope to their lives."
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <EventCard
                img="/images/events/event-3.jpg"
                title="Be kind for the poor people and the kids."
                desc="Extend kindness to those in need, especially the poor and vulnerable children. Your compassion can make a world of difference, offering them hope and a brighter future. Let's come together to show that even small acts of kindness can have a big impact."
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

          {showMoreBtn && (
            <div className="w-full flex justify-center">
              <Link
                href={"/event"}
                className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out mt-10"
              >
                Show More
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Events;
