import Navbar from "../components/navbar/Navbar";
import "../globals.css";

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={` w-full h-full m-0 p-0 overflow-x-hidden`}>
      <Navbar />
      {children}
    </div>
  );
}
