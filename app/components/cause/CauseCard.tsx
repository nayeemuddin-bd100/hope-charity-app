"use client";
import { getUserInfoFromToken } from "@/app/services/auth.service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import TruncatedText from "../shared/TruncatedText";
import ProgressBar from "./ProgressBar";

type CauseCardProps = {
  causeId: string;
  image: string;
  title: string;
  desc: string;
  goal: number;
  raise: number;
};
const CauseCard = ({
  causeId,
  image,
  title,
  desc,
  goal,
  raise,
}: CauseCardProps) => {
  const router = useRouter();
  const percentage = (raise / goal) * 100;

  const userInfo = getUserInfoFromToken();
  const handleDonate = () => {
    if (userInfo && userInfo?.role !== "donor") {
      return toast.error(`You are ${userInfo?.role}, Only donors can donate`);
    }
    router.push(`/donate/${causeId}`);
  };
  return (
    <div className="flex flex-col justify-center items-center group border border-x-green-500 border-y-yellow-500 py-4 px-4 md:px-2 lg:px-5">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="relative w-full max-w-[300px] aspect-square overflow-hidden rounded-full border-2 border-green-200 transition duration-300 ease-in-out "
      >
        <Image
          src={image}
          alt={image}
          layout="fill"
          objectFit="cover"
          className="rounded-full group-hover:scale-105 transition duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 ease-in-out rounded-full flex justify-center items-center">
          <button
            onClick={handleDonate}
            className="bg-btn-gradient text-white px-3 py-2 rounded hover:bg-btn-gradient-hover transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          >
            Donate Now
          </button>
        </div>
      </div>

      <ProgressBar percentage={percentage} />

      <div className="flex flex-col xs:flex-row justify-center gap-y-3 gap-x-8 w-full items-center mt-4">
        <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out ">
          Goal: ${goal}
        </button>
        <button className="bg-yellow-500 text-white px-3 py-2 rounded  hover:bg-yellow-600 transition duration-300 ease-in-out ">
          Raise: ${raise}
        </button>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 px-5">
        <h2 className="text-xl lg:text-3xl font-semibold text-gray-800 text-center ">
          <TruncatedText text={title} lines={3} />
        </h2>
        <p className=" text-sm text-center font-inter text-gray-500 mt-3">
          <TruncatedText text={desc} lines={4} />
        </p>
      </div>
    </div>
  );
};

export default CauseCard;
