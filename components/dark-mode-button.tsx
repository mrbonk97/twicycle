"use client";

import * as React from "react";
import { SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <li
            role="button"
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
            className="flex2 aspect-square rounded-xl bg-secondary cursor-pointer text-blue-400 hover:opacity-80 duration-150"
          >
            <SunIcon />
          </li>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>모드 변경</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
