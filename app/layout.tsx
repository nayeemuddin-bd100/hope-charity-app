import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
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
      <body className={barlowCondensed.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
