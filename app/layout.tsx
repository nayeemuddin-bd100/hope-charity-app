import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

//Dynamic imports for client-side only components
const DynamicAOSInit = dynamic(
  () => import("@/app/providers/AOSProvider").then((mod) => mod.AOSInit),
  { ssr: false }
);
const DynamicToastProvider = dynamic(
  () => import("./providers/ToastProvider"),
  { ssr: false }
);

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
      <body
        className={`${barlowCondensed.className} w-full h-full m-0 p-0 overflow-x-hidden`}
      >
        <DynamicAOSInit />
        <DynamicToastProvider />

        {children}
      </body>
    </html>
  );
}
