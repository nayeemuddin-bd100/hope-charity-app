"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  message: string;
  donationAmount: number | null;
}
const DonationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
    donationAmount: null,
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

  const handleDonationAmount = (amount: number | null) => {
    setFormData({ ...formData, donationAmount: amount });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-10">
        {/* Donation Amount */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-5">
            Select Donation Amount
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              type="button"
              className={`py-2 px-4 rounded-md ${
                formData.donationAmount === 10
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleDonationAmount(10)}
            >
              $10
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded-md ${
                formData.donationAmount === 20
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleDonationAmount(20)}
            >
              $20
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded-md ${
                formData.donationAmount === 50
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleDonationAmount(50)}
            >
              $50
            </button>
            <input
              type="number"
              placeholder="Custom Amount"
              className="border rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={
                formData.donationAmount !== null ? formData.donationAmount : ""
              }
              onChange={(e) =>
                handleDonationAmount(
                  e.target.value ? parseInt(e.target.value) : null
                )
              }
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-700 mb-5">
          {" "}
          Enter Your Details
        </h2>

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
              htmlFor="lastName"
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
            <label htmlFor="email" className="block text-gray-700 text-lg mb-2">
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
              htmlFor="address"
              className="block text-gray-700 text-lg mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className=" border rounded border-gray-200 w-full sm:w-4/5 lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              placeholder="Enter your Address"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-lg mb-2">
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
            className="bg-btn-gradient hover:bg-btn-gradient-hover text-white font-bold py-2 px-8 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
