import { MenuSheet } from "../sheet/menu-sheet";
import { Input } from "../ui/input";
import { MenuIcon, SearchIcon } from "lucide-react";

export const Topnav = () => {
  return (
    <header className="fixed z-20 top-4 md:pl-[21rem] lg:pl-[30rem] w-full flex lg:justify-end px-5 gap-2">
      <form className="relative w-full lg:max-w-80">
        <button className="absolute top-1/2 left-4 -translate-y-1/2">
          <SearchIcon />
        </button>
        <Input
          name="q"
          className="pl-12 py-6 w-full lg:rounded-full"
          placeholder="검색"
        />
        <MenuSheet>
          <button className="absolute lg:hidden top-1/2 right-4 -translate-y-1/2">
            <MenuIcon size={32} />
          </button>
        </MenuSheet>
      </form>
    </header>
  );
};
