"use client";
import { useRouter } from "next/navigation";
import Sidebar from "../components/dashboard/Sidebar";
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
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 w-full  m-0 p-0 overflow-x-hidden">
      <div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
