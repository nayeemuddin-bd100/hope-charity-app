import { Clock, MapPin } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  img: string;
  title: string;
  desc: string;
}
const EventCard = ({ img, title, desc }: EventCardProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-full   gap-3 p-5 sm:mx-5 md:mx-10 lg:mx-20 hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-green-600 transition duration-700 ease-in-out  hover:rounded hover:shadow-2xl shadow-lime-300 group z-20 bg-white">
      <div className="relative w-full md:w-4/12 h-full cursor-pointer">
        <Image
          src={img}
          alt="event-1"
          width={500}
          height={600}
          className="w-full h-[150px] md:h-[200px] object-cover"
        />
      </div>
      {/* Card right */}
      <div className="w-full md:w-10/12  h-full ">
        <div className="flex flex-row   gap-3 h-full">
          {/* Card Date */}
          <div className="md:min-h-[200px] flex flex-col justify-center   items-stretch bg-green-500 group-hover:bg-primary py-5 md:py-0 md px-5">
            <p className="text-white text-2xl font-bold text-center">Mar</p>
            <p className="text-white text-4xl font-bold text-center">22</p>
          </div>
          <div className="md:min-h-[200px] py-5 md:py-0 flex justify-center items-start flex-col gap-3">
            {/* Time and location */}
            <div className="flex justify-start items-center gap-3 text-primary">
              <div className="flex justify-center items-center gap-3">
                <p className=" ">
                  <Clock className="w-4 h-4 inline-block" />
                  <span className="inline-block">11:00 AM - 2:00 PM</span>
                </p>
              </div>

              <div className="flex justify-center items-center gap-3">
                <p className="">
                  <MapPin className="w-4 h-4 inline-block" />
                  <span className="inline-block">Chittagong,Bangladesh</span>
                </p>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-start text-gray-800  capitalize group-hover:text-white  cursor-pointer">
              {title}
            </h2>
            {/* Description */}
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
