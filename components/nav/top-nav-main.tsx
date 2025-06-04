import { MenuIcon, SearchIcon } from "lucide-react";

export const TopnavMain = async () => {
  return (
    <nav className="fixed z-10 top-0 left-0 sm:left-20 right-0 p-5">
      <form className="h-12 border bg-background">
        <button className="absolute top-1/2 -translate-y-1/2">
          <SearchIcon />
        </button>
        <input className="p-2 h-full w-full" autoComplete="false" />
      </form>
      <button className="absolute right-8 top-1/2 -translate-y-1/2">
        <MenuIcon />
      </button>
    </nav>
  );
};
