"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineMenu } from "react-icons/hi";
import Container from "../shared/Container";
import Logo from "../shared/Logo";
import MenuItem from "./MenuItem";

const menuItems = [
  { name: "Home", path: "/", current: true },
  { name: "About", path: "/about", current: false },
  { name: "Cause", path: "/cause", current: false },
  { name: "Event", path: "/event", current: false },
  { name: "Blog", path: "/blog", current: false },
  { name: "Contact", path: "/contact", current: false },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className="fixed w-full h-[90px] bg-white shadow-md z-50 top-0">
      <Container>
        <div className="flex items-center justify-between py-3">
          {/* Left Side */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={() => router.push(`${item.path}`)}
                  label={item.name}
                  active={pathname === item.path}
                />
              ))}
            </div>
          </div>

          {/* Mobile Menu (Drawer) */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                className="bg-btn-gradient p-2 rounded text-white"
              >
                <HiOutlineMenu className="w-6 h-6 " />
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-white">
              <div className="p-4">
                {menuItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <MenuItem
                      key={item.name}
                      onClick={() => router.push(`${item.path}`)}
                      label={item.name}
                      active={pathname === item.path}
                    />
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
