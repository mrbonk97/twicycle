import { Logo } from "@/components/logo";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export const SearchTopnav = () => {
  return (
    <section className="fixed top-0 px-2 lg:px-[5%] h-20 w-full flex items-center justify-between border-b bg-primary-foreground z-10">
      <form action={"/search"} className="relative">
        <button className="absolute top-1/2 left-4 -translate-y-1/2">
          <SearchIcon />
        </button>
        <Input
          name="q"
          className="pl-12 py-5 w-60 rounded-full"
          placeholder="검색"
        />
      </form>
    </section>
  );
};
