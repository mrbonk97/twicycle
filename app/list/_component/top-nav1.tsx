import { Logo } from "@/components/logo";
import { LogoSimple } from "@/components/logo-simple";
import { MenuSheet } from "@/components/sheet/menu-sheet";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export const Topnav1 = () => {
  return (
    <header className="fixed top-0 pr-5 pl-5 sm:pl-56 md:pl-[19rem] lg:pl-96 h-16 w-full flex items-center justify-between gap-2 bg-background border-b">
      <form className="relative w-full">
        <button className="absolute top-1/2 left-4 -translate-y-1/2">
          <SearchIcon />
        </button>
        <Input name="q" className="pl-12 w-full" placeholder="검색" />
      </form>
      <MenuSheet>
        <button className="cursor-pointer">
          <div className="sm:hidden">
            <LogoSimple />
          </div>
          <div className="hidden sm:inline">
            <Logo />
          </div>
        </button>
      </MenuSheet>
    </header>
  );
};
