import Link from "next/link";
import { SunIcon } from "lucide-react";
import { MENU_LIST } from "@/constants/constant";
import { DarkMode } from "@/components/dark-mode/dark-mode";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const LeftMenuNav = () => {
  return (
    <nav className="hidden lg:block fixed z-50 top-0 bottom-0 left-0 w-20 border-r bg-background">
      <ul className="p-2 space-y-5">
        {MENU_LIST.map((item) => (
          <TooltipProvider key={item.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <li>
                  <Link
                    href={item.url}
                    className="flex2 aspect-square rounded-xl bg-secondary text-blue-400 hover:opacity-80 duration-150"
                  >
                    {item.icon}
                  </Link>
                </li>
              </TooltipTrigger>
              <TooltipContent side="right">{item.title}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DarkMode className="flex2 aspect-square rounded-xl bg-secondary text-blue-400 hover:opacity-80 duration-150 cursor-pointer">
                <SunIcon />
              </DarkMode>
            </TooltipTrigger>
            <TooltipContent side="right">모드변경</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ul>
    </nav>
  );
};
