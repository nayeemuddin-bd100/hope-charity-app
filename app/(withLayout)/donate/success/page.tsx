"use client";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FaCheckCircle, FaHandsHelping, FaHeart, FaHome } from "react-icons/fa";

const SuccessfulDonation = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const amount = searchParams.get("amount");

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white rounded-3xl p-10 shadow-lg max-w-md mx-auto mt-20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold text-green-500 mb-6"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        Thank You!
      </motion.h1>
      <motion.p
        className="text-gray-700 text-xl text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Your generous donation of ${amount} will make a real difference in
        people&apos;s lives. Together, we can create positive change in our
        community.
      </motion.p>
      <motion.div
        className="text-yellow-500 text-8xl mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        <FaHeart />
      </motion.div>
      <motion.div
        className="text-5xl font-bold text-green-500 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        ${amount}
      </motion.div>
      <motion.button
        className="bg-green-500 text-white px-8 py-4 rounded-full text-xl font-semibold flex items-center transition-colors duration-300 hover:bg-green-600 mb-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleConfetti}
      >
        <FaCheckCircle className="mr-2 hidden sm:block" />
        Donation Received
      </motion.button>
      <p className="text-gray-600 text-center mb-6">
        Your support fuels our mission. Every contribution, no matter the size,
        brings us one step closer to making a lasting impact.
      </p>
      <div className="flex space-x-0 flex-col items-center justify-center gap-x-0 gap-y-1.5 sm:flex sm:flex-row sm:gap-2">
        <motion.button
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center transition-colors duration-300 hover:bg-blue-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
        >
          <FaHome className="mr-2" />
          Home
        </motion.button>
        <motion.button
          className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center transition-colors duration-300 hover:bg-yellow-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/cause")}
        >
          <FaHandsHelping className="mr-2 hidden sm:block" />
          Explore Causes
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SuccessfulDonation;
