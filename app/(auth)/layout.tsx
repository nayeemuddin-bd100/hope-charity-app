import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "../globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const metadata: Metadata = {
  title: "Hope",
  description: "Hope - Charity App ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={barlowCondensed.className}>{children}</div>;
}
