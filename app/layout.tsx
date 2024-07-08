import { AOSInit } from "@/app/providers/AOSProvider";
import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import ClientOnly from "./components/shared/ClientOnly";
import "./globals.css";
import ToastProvider from "./providers/ToastProvider";

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
      <ClientOnly>
        <AOSInit />
        <ToastProvider />
      </ClientOnly>
      <body
        className={`${barlowCondensed.className} w-full h-full m-0 p-0 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
