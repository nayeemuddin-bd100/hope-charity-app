"use client";
import { logoutUser } from "@/app/services/actions/logoutUser";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DollarSign,
  Heart,
  Home,
  HomeIcon,
  LogOut,
  Menu,
  Settings,
  Users,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaHistory, FaUser } from "react-icons/fa";
import Logo from "../shared/Logo";
import SidebarMenu from "./SidebarMenu";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Heart, label: "Manage Causes", href: "/dashboard/cause" },
  // { icon: Calendar, label: "Manage Events", href: "/dashboard/event" },
  { icon: Users, label: "Manage Users", href: "/dashboard/user" },
  { icon: DollarSign, label: "Manage Donations", href: "/dashboard/donation" },
];

const userMenuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  {
    icon: FaUser,
    label: "Personal Information",
    href: "/dashboard/personal-information",
  },
  {
    icon: FaHistory,
    label: "Donation History",
    href: "/dashboard/donation-history",
  },
];

const operateItems = [
  { icon: Settings, label: "Settings", href: "/dashboard/setting" },
  { icon: HomeIcon, label: "Home", href: "/" },
];

export default function Sidebar({ userInfo }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  let sidebarMenu = null;
  if (userInfo?.role === "admin" || userInfo?.role === "super-admin") {
    sidebarMenu = menuItems;
  } else {
    sidebarMenu = userMenuItems;
  }

  return (
    <div className="md:min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-white h-screen border-r flex-col">
        {/* Logo */}
        <div className="p-4">
          <Logo />
        </div>
        <nav className="my-8 flex flex-col justify-between h-full">
          {/* Menu Items */}
          <div>
            {sidebarMenu.map((item, index) => (
              <SidebarMenu key={index} item={item} pathname={pathname} />
            ))}
          </div>
          {/* Operate Items */}
          <div>
            {operateItems.map((item, index) => (
              <SidebarMenu key={index} item={item} pathname={pathname} />
            ))}
            {/* Logout button */}
            <Button
              onClick={() => logoutUser(router)}
              variant="ghost"
              className="w-full justify-start gap-2 p-2 text-gray-600 hover:text-red-500 hover:bg-green-50 text-lg"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden m-4">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 flex flex-col justify-center bg-white"
        >
          {/* Logo */}
          <div className="p-4">
            <Logo />
          </div>
          <nav className="my-8 ml-5 flex flex-col justify-between h-full">
            <div>
              {menuItems.map((item, index) => (
                <div onClick={() => setIsOpen(false)} key={index}>
                  <SidebarMenu item={item} pathname={pathname} />
                </div>
              ))}
            </div>

            <div>
              {operateItems.map((item, index) => (
                <div onClick={() => setIsOpen(false)} key={index}>
                  <SidebarMenu item={item} pathname={pathname} />
                </div>
              ))}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
