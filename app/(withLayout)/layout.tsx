import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ClientOnly from "../components/shared/ClientOnly";
import "../globals.css";

export default function commonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      {children}
      <Footer />
    </div>
  );
}
