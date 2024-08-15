import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MENU_LIST } from "@/constants";
import { icons, MenuIcon, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { ThemeTogle } from "../theme-toggle";

export const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="absolute lg:hidden top-1/2 right-4 -translate-y-1/2">
          <MenuIcon size={32} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>메뉴</SheetTitle>
        </SheetHeader>

        <nav className="mt-5 flex flex-col gap-5">
          {MENU_LIST.map((item) => (
            <SheetClose asChild key={item.title}>
              <Button
                variant={"secondary"}
                className="p-6 flex items-center gap-4 justify-start"
                asChild
              >
                <Link href={item.url}>
                  <span className="text-blue-400">{item.icon}</span>
                  {item.title}
                </Link>
              </Button>
            </SheetClose>
          ))}
        </nav>

        <SheetFooter className="mt-5">
          <ThemeTogle>
            <Button
              variant={"secondary"}
              className="p-6 w-full flex items-center gap-4 justify-start"
            >
              <span className="text-blue-400">
                <Sun size={32} className="dark:hidden" />
                <Moon size={32} className="hidden dark:block" />
                <span className="sr-only">Toggle theme</span>
              </span>
              테마 선택
            </Button>
          </ThemeTogle>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
