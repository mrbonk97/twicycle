import { MENU_LIST } from "@/asset/constant";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggle2 } from "../nav/theme-toggle-2";

interface Props {
  className?: string;
}

export function MenuButton({ className }: Props) {
  return (
    <Sheet>
      <SheetTrigger className={cn("p-2 text-blue-400 rounded-lg hover:bg-secondary duration-150", className)}>
        <Menu />
        <span className="sr-only">메뉴</span>
      </SheetTrigger>
      <SheetContent className="z-[103] w-full">
        <SheetHeader>
          <SheetTitle>메뉴</SheetTitle>
          <SheetDescription className="sr-only">이인거 메뉴</SheetDescription>
        </SheetHeader>
        <ul className="p-4 space-y-2">
          {MENU_LIST.map((item) => (
            <li key={`mobile-${item.id}`}>
              <Link href={item.url} className="p-4 block bg-primary rounded-lg text-primary-foreground">
                {item.title}
              </Link>
            </li>
          ))}
          <ThemeToggle2 />
        </ul>
      </SheetContent>
    </Sheet>
  );
}
