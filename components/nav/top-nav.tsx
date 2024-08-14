import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

export const Topnav = () => {
  return (
    <header>
      <form
        className="fixed hidden sm:block top-10 z-50 right-1/4"
        action={"/search"}
      >
        <button className="absolute top-1/2 left-4 -translate-y-1/2">
          <SearchIcon />
        </button>
        <Input
          name="q"
          className="pl-12 py-5 w-96 rounded-full"
          placeholder="검색"
        />
      </form>
    </header>
  );
};
