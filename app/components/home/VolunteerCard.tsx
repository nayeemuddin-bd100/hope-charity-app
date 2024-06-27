import Image from "next/image";

type VolunteerCardProps = {
  img: string;
  name: string;
  title: string;
};

const VolunteerCard = ({ img, name, title }: VolunteerCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto group">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="w-[200px] h-[200px]  rounded-xl relative"
      >
        <Image
          src={img}
          alt="volunteer"
          width={500}
          height={600}
          className=" object-cover w-full h-full rounded-xl group-hover:-translate-y-3.5 group-hover:shadow-2xl group-hover:shadow-slate-500 transition duration-500 ease-in-out"
        />
      </div>

      <div className="flex flex-col justify-center items-center my-3">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary">{name}</h2>
        <p className="text-sm lg:text-base text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default VolunteerCard;
