"use client";
import { useRouter } from "next/navigation";
import Sidebar from "../components/dashboard/Sidebar";
import ClientOnly from "../components/shared/ClientOnly";
import Container from "../components/shared/Container";
import Providers from "../providers/Providers";
import { getUserInfoFromToken, isLoggedIn } from "../services/auth.service";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const userInfo = getUserInfoFromToken();

  if (!userLoggedIn && userInfo?.role !== "admin") {
    return router.push("/login");
  }
  return (
    <ClientOnly>
      <Providers>
        <Container>
          <div className="flex flex-col md:flex-row h-screen bg-gray-100 w-full  m-0 p-0 overflow-x-hidden">
            <div>
              <Sidebar userInfo={userInfo} />
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
              <main className="py-6">{children}</main>
            </div>
          </div>
        </Container>
      </Providers>
    </ClientOnly>
  );
}
