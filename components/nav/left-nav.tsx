import Link from "next/link";
import { HomeIcon, MapPinIcon, VenetianMaskIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ThemeToggle } from "./theme-toggle";

export function Leftnav() {
  return (
    <nav className="z-[101] fixed hidden sm:block top-0 bottom-0 left-0 px-2 py-4 w-20 bg-secondary border-r">
      <ul className="space-y-2 text-blue-400">
        {MENU.map((item) => (
          <TooltipProvider key={item.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <li>
                  <Link
                    href={item.url}
                    scroll={false}
                    className="flex items-center justify-center aspect-square rounded-lg bg-background hover:opacity-80 duration-150"
                  >
                    {item.icon}
                  </Link>
                </li>
              </TooltipTrigger>
              <TooltipContent side="right" className="z-[103]">
                {item.title}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        <ThemeToggle />
      </ul>
    </nav>
  );
}

const MENU = [
  {
    id: "menu-1",
    title: "홈",
    url: "/",
    icon: <HomeIcon size={32} />,
  },
  {
    id: "menu-2",
    title: "목록",
    url: "/locations",
    icon: <MapPinIcon size={32} />,
  },
  {
    id: "menu-3",
    title: "신규제보하기",
    url: "/request",
    icon: <VenetianMaskIcon size={32} />,
  },
];
