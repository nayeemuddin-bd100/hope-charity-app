import { AOSInit } from "@/provider/AOSProvider";
import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Hope",
  description: "Hope - Charity App ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`${barlowCondensed.className} w-full h-full m-0 p-0 overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
