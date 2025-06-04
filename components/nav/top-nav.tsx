"use client";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { MenuSheet } from "../menu-sheet";

export const Topnav = () => {
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q")?.toString().trim();
    const encodedQ = q ? encodeURIComponent(q) : "";
    router.push(`/locations${encodedQ ? `?q=${encodedQ}` : ""}`);
  };

  return (
    <header className="fixed z-10 top-0 left-0 sm:left-20 xl:left-[23rem] right-0 pl-2 pr-5 h-14 sm:h-20 flex items-center justify-between gap-5 bg-background border-b">
      <form className="relative h-full w-full" onSubmit={handleSearch}>
        <button className="absolute top-1/2 left-4 -translate-y-1/2">
          <SearchIcon />
        </button>
        <input autoComplete="off" name="q" className="pl-12 h-full w-full" placeholder="검색" />
      </form>
      <MenuSheet />
    </header>
  );
};
