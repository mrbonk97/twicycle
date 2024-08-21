import { MENU_LIST } from "@/constants";
import { ThemeTogle } from "@/components/theme-toggle";
import { CubeCard } from "@/components/card/cube-card";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeftRouternavProps {
  className?: string;
}

export const LeftRouternav = ({ className }: LeftRouternavProps) => (
  <aside
    className={cn(
      "fixed z-[103] hidden lg:block left-0 py-5 px-2 h-full w-20 border-r bg-background text-blue-400",
      className
    )}
  >
    <nav className="mb-4 space-y-4">
      {MENU_LIST.map((item) => (
        <CubeCard
          key={item.id}
          title={item.title}
          icon={item.icon}
          url={item.url}
        />
      ))}
    </nav>
    <ThemeTogle>
      <button className="w-12 sm:w-full aspect-square rounded-lg cursor-pointer flex items-center justify-center bg-secondary hover:opacity-80 duration-200">
        <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </ThemeTogle>
  </aside>
);
