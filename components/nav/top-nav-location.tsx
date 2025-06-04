"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { MenuSheet } from "@/components/menu-sheet";

export const TopHomeNav = () => {
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q")?.toString().trim();
    const encodedQ = q ? encodeURIComponent(q) : "";
    router.push(encodedQ ? `/?q=${encodedQ}` : "/");
  };

  return (
    <header className="fixed z-10 sm:hidden top-0 left-0 right-0 p-2 px-5 h-12 flex items-center justify-between gap-2 bg-background">
      <form className="relative h-full w-full" onSubmit={handleSearch}>
        <button type="submit" className="absolute top-1/2 left-4 -translate-y-1/2 pr-2 border-r">
          <SearchIcon size={16} />
        </button>
        <input name="q" className="pl-12 h-full w-full" placeholder="검색" />
      </form>
      <MenuSheet />
    </header>
  );
};
