"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="inline-flex text-[40px] font-bold text-gray-800 cursor-pointer uppercase"
      onClick={() => router.push("/")}
    >
      <Image
        alt="Logo"
        width={66}
        height={54}
        className="mr-1"
        src="/images/logo.png"
      />
      Hope
    </div>
  );
};

export default Logo;
