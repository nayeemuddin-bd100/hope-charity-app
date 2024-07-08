"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import { useState } from "react";
import Breadcrumb from "../../components/shared/Breadcrumb";
import Container from "../../components/shared/Container";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}
const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="">
      <Breadcrumb label="Contact Us" />
      <Container>
        <div className="flex flex-col lg:flex-row justify-start items-start py-16 gap-x-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-y-5">
            {/* Contact Info */}
            <div className="flex flex-col justify-start items-start gap-y-3">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                Contact Us
              </h2>
              <p className="text-gray-500 font-inter text-sm md:pr-12 lg:pr-0">
                For any inquiries or support, feel free to reach out to us.
                We&lsquo;re here to help and answer any questions you may have.
              </p>
            </div>

            {/* Address */}

            <div className="flex justify-start items-center gap-x-5 ">
              <MapPin className="text-green-500 shadow-2xl" size={22} />
              <div>
                <h2 className="text-2xl text-gray-800">Our Location</h2>
                <p className="text-lg text-gray-500">
                  28 Agrabadh Access Road, Chittagong
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-x-5 ">
              <PhoneCall className="text-green-500 shadow-2xl" size={22} />
              <div>
                <h2 className="text-2xl text-gray-800">Phone</h2>
                <p className="text-lg text-gray-500">008 992 541</p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-x-5 ">
              <Mail className="text-green-500 shadow-2xl" size={22} />
              <div>
                <h2 className="text-2xl text-gray-800">Email</h2>
                <p className="text-lg text-gray-500">support@hope.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
              Quick Contact form
            </h2>

            <form onSubmit={handleSubmit} className="mt-5">
              {/* First row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 text-lg mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className=" border rounded border-gray-200 w-full sm:w-4/5 lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 text-lg mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className=" border rounded border-gray-200 w-full sm:w-4/5 lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Second row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 text-lg mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className=" border rounded border-gray-200 w-full sm:w-4/5 lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 text-lg mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className=" border rounded border-gray-200 w-full sm:w-4/5 lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                    placeholder="Enter your email subject"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-lg mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                  rows={5}
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="flex items-start justify-start">
                <button
                  type="submit"
                  className="bg-btn-gradient hover:bg-btn-gradient-hover text-white font-bold py-2 px-8 rounded-3xl focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
