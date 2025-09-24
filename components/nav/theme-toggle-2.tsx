"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Spinner } from "@/components/spinner";

export function ThemeToggle2() {
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
      <li className="p-4 block bg-primary rounded-lg text-primary-foreground">
        <Spinner />
      </li>
    );

  return (
    <li onClick={changeTheme} className="w-full">
      <button className="p-4 flex items-center gap-2 w-full bg-primary rounded-lg text-primary-foreground">
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </li>
  );
}
