"use client";

import Form from "next/form";
import { MenuSheet } from "@/components/nav/menu-sheet";
import { SearchIcon } from "lucide-react";

export const TopHomeNav = () => {
  return (
    <header className="fixed z-10 lg:hidden top-0 left-0 right-0 p-2 px-5 h-12 flex items-center justify-between gap-2 bg-background">
      <Form action={"/"} className="relative h-full w-full">
        <button type="submit" className="absolute top-1/2 left-4 -translate-y-1/2 pr-2 border-r">
          <SearchIcon size={16} />
        </button>
        <input name="q" className="pl-12 h-full w-full" placeholder="검색" />
      </Form>
      <MenuSheet />
    </header>
  );
};
