import Navbar from "../components/navbar/Navbar";
import "../globals.css";

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
