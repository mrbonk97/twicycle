"use client";
import * as React from "react";
import { useTheme } from "next-themes";

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
      <DropdownMenuContent align="end" className="z-[104]">
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
