"use client";

import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

type LogoProps = {
  className?: string;
};
const Logo = ({ className }: LogoProps) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "inline-flex text-[40px] font-bold text-gray-800 cursor-pointer uppercase",
        className
      )}
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
