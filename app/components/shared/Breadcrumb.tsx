"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../shared/Container";

const Breadcrumb = ({ label }: { label: string }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== ""); // ['about']

  return (
    <div className="relative w-full h-[280px] mt-[90px]">
      <div className="absolute inset-0 bg-[url('/images/page-title.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-primary opacity-80 flex justify-center items-center">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl xl:text-7xl font-bold mb-4 text-white z-20">
              {label}
            </h1>
            <div className="flex justify-center items-center space-x-2">
              <Link
                href="/"
                className="text-gray-200 hover:text-gray-500 text-xl"
              >
                Home
              </Link>
              <div className="flex justify-center items-center">
                <ChevronRight size={20} className="text-white" />
              </div>

              <div>
                {pathSegments.map((segment, index) => (
                  <Link
                    key={index}
                    href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                    className=" text-gray-200 hover:text-gray-500 text-xl capitalize"
                  >
                    {segment}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Breadcrumb;
