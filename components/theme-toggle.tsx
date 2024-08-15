"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ThemeToggleProps {
  children: React.ReactNode;
}
export function ThemeTogle({ children }: ThemeToggleProps) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          라이트모드
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          다크모드
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          기본값
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

{
  /* <button className="w-12 sm:w-full aspect-square rounded-lg cursor-pointer flex items-center justify-center bg-secondary hover:opacity-80 duration-200">
<Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-blue-400" />
<Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
<span className="sr-only">Toggle theme</span>
</button> */
}
