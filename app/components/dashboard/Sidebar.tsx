"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Calendar,
  DollarSign,
  Heart,
  Home,
  HomeIcon,
  LogOut,
  Menu,
  Settings,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../shared/Logo";
import SidebarMenu from "./SidebarMenu";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Heart, label: "Manage Causes", href: "/dashboard/cause" },
  { icon: Calendar, label: "Manage Events", href: "/dashboard/event" },
  { icon: Users, label: "Manage Users", href: "/dashboard/user" },
  { icon: DollarSign, label: "Manage Donations", href: "/dashboard/donation" },
];

const operateItems = [
  { icon: Settings, label: "Settings", href: "/dashboard/setting" },
  { icon: HomeIcon, label: "Home", href: "/" },
  { icon: LogOut, label: "Logout", href: "/logout" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-white h-screen border-r flex-col">
        {/* Logo */}
        <div className="p-4">
          <Logo />
        </div>
        <nav className="my-8 ml-5 flex flex-col justify-between h-full">
          <div>
            {menuItems.map((item, index) => (
              <SidebarMenu key={index} item={item} pathname={pathname} />
            ))}
          </div>

          <div>
            {operateItems.map((item, index) => (
              <SidebarMenu key={index} item={item} pathname={pathname} />
            ))}
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
        <SheetContent side="left" className="p-0 flex flex-col bg-white">
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
