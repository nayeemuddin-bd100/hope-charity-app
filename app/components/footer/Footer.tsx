import { Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Container from "../shared/Container";
import Logo from "../shared/Logo";

const Footer = () => {
  return (
    <div className="mt-5  bg-primary text-white">
      <Container>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10  gap-8">
          {/* 1st col */}
          <div className="flex flex-col justify-start items-start gap-4">
            <Logo className="text-white" />
            <p className="text-lg ">
              Empowering communities through support, education, and health
              initiatives. Join us in making a difference and creating lasting
              change.
            </p>
            <div className="flex justify-start items-center gap-3 ">
              <FaFacebook
                size={22}
                className="hover:text-green-500 transition duration-300 ease-in-out "
              />
              <BsTwitter
                size={22}
                className="hover:text-green-500 transition duration-300 ease-in-out "
              />
              <FaInstagram
                size={22}
                className="hover:text-green-500 transition duration-300 ease-in-out "
              />
              <Linkedin
                size={22}
                className="hover:text-green-500 transition duration-300 ease-in-out "
              />
            </div>
          </div>

          {/* 2nd col */}

          <div className="flex md:justify-center items-center">
            <div className="flex flex-col justify-start items-start gap-3 ">
              <h2 className="text-xl font-bold ">Useful Link</h2>
              <Link
                href={"/about"}
                className="text-lg hover:text-green-500 transition duration-300 ease-in-out capitalize"
              >
                about us
              </Link>
              <Link
                href={"/cause"}
                className="text-lg hover:text-green-500 transition duration-300 ease-in-out capitalize"
              >
                our causes
              </Link>

              <Link
                href={"/contact"}
                className="text-lg hover:text-green-500 transition duration-300 ease-in-out capitalize"
              >
                Contact Us
              </Link>
              <Link
                href={"/event"}
                className="text-lg hover:text-green-500 transition duration-300 ease-in-out capitalize"
              >
                Our Event
              </Link>
            </div>
          </div>

          {/* 3rd col */}
          <div className="flex flex-col justify-start items-start gap-3 ">
            <h2 className="text-xl font-bold">Contact</h2>
            <div className="flex justify-start items-center gap-2 text-white">
              <MapPin size={22} />
              <p className="text-lg "> 28 Agrabadh Access Road, Chittagong</p>
            </div>

            <div className="flex justify-start items-center gap-2 text-white">
              <PhoneCall size={22} />
              <p className="text-lg "> 008 992 541</p>
            </div>
            <div className="flex justify-start items-center gap-2 text-white">
              <Mail size={22} />
              <p className="text-lg ">support@hope.com</p>
            </div>
          </div>
        </div>
      </Container>
      <p className="text-center text-lg py-5 bg-[#112141]">
        Made with ❤️ by Nayeem
      </p>
    </div>
  );
};

export default Footer;
