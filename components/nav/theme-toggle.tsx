"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Spinner } from "@/components/spinner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ThemeToggle() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme == "dark") setTheme("light");
    else setTheme("dark");
  };

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded)
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <li className="p-4 w-full aspect-square flex items-center justify-center rounded-lg bg-background">
              <Spinner />
            </li>
          </TooltipTrigger>
          <TooltipContent side="right" className="z-[103]">
            다크모드
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <li onClick={changeTheme}>
            <button className="p-4 w-full aspect-square flex items-center justify-center rounded-lg bg-background">
              {theme === "light" ? <Sun /> : <Moon />}
            </button>
          </li>
        </TooltipTrigger>
        <TooltipContent side="right" className="z-[103]">
          다크모드
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
