"use client";
import { Logo } from "@/components/logo";
import { LogoSimple } from "@/components/logo-simple";
import { MenuSheet } from "@/components/sheet/menu-sheet";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export const Topnav1 = () => {
  const router = useRouter();
  const query = useSearchParams().get("q");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    const query = e.target.q.value ? `?q=${e.target.q.value}` : "";
    router.push(`${window.location.pathname}${query}`, {
      scroll: false,
    });
  };
  return (
    <header className="fixed top-0 pr-5 pl-5 sm:pl-56 md:pl-[19rem] lg:pl-96 h-16 w-full flex items-center justify-between gap-2 bg-background border-b">
      <form onSubmit={handleSubmit} className="relative w-full">
        <button className="absolute top-1/2 left-4 -translate-y-1/2">
          <SearchIcon />
        </button>
        <Input
          autoComplete="off"
          name="q"
          className="pl-12 w-full"
          defaultValue={query || ""}
          placeholder="검색"
        />
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
