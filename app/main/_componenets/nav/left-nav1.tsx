import { MENU_LIST } from "@/constants";
import { CubeCard } from "./cube-card";
import { ThemeTogle } from "@/components/theme-toggle";
import { Moon, Sun } from "lucide-react";

export const Leftnav1 = () => (
  <aside className="fixed z-30 hidden lg:block left-0 p-5 px-2 h-full w-20  border-r bg-background">
    <nav className="space-y-4 text-blue-400">
      {MENU_LIST.map((item) => (
        <CubeCard
          key={item.id}
          title={item.title}
          icon={item.icon}
          url={item.url}
        />
      ))}
      <ThemeTogle>
        <button className="w-12 sm:w-full aspect-square rounded-lg cursor-pointer flex items-center justify-center bg-secondary hover:opacity-80 duration-200">
          <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-blue-400" />
          <Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </ThemeTogle>
    </nav>
  </aside>
);
