import Form from "next/form";
import { SearchIcon } from "lucide-react";
import { MenuSheet } from "@/components/nav/menu-sheet";

export const TopLocationNav = () => {
  return (
    <header className="fixed z-10 top-0 left-0 sm:left-20 xl:left-[23rem] right-0 pl-2 pr-5 h-14 sm:h-20 flex items-center justify-between gap-5 bg-background border-b">
      <Form action={"/locations"} className="relative h-full w-full">
        <button className="absolute top-1/2 left-4 -translate-y-1/2">
          <SearchIcon />
        </button>
        <input autoComplete="off" name="q" className="pl-12 h-full w-full" placeholder="검색" />
      </Form>
      <MenuSheet />
    </header>
  );
};
