import { cn } from "@/app/lib/utils";
import Image from "next/image";

type FeaturesCardProps = {
  icon: string;
  title: string;
  borderColor: string;
};

const FeaturesCard = ({ icon, title, borderColor }: FeaturesCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center py-5 px-2 transition-all duration-300 ease-in-out group ",
        "even:bg-yellow-500 odd:bg-green-500 ",
        "xs:[&:nth-child(1)]:bg-green-500 xs:[&:nth-child(4)]:bg-green-500 ",
        "xs:[&:nth-child(2)]:bg-yellow-500 xs:[&:nth-child(3)]:bg-yellow-500"
      )}
    >
      <div
        className={cn(
          "relative h-[112px] w-[112px] bg-white rounded-full border-8 ",
          borderColor
        )}
      >
        <Image
          src={icon}
          fill
          className="p-5 w-[100%] h-[100%] object-contain"
          alt="icon"
        />
      </div>
      <h2 className="text-xl lg:text-2xl font-semibold text-primary mt-3 tracking-wide text-center capitalize ">
        {title}
      </h2>
    </div>
  );
};

export default FeaturesCard;
