"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MENU_LIST } from "@/constants/constant";
import { bagelFatOne } from "@/lib/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "lucide-react";

export function MenuSheet() {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(cur) => {
        if (window.innerWidth < 640) setIsOpen(cur);
        else router.push("/");
      }}
    >
      <SheetTrigger className={`shrink-0 text-xl text-blue-400 ${bagelFatOne.className}`}>
        이인거
      </SheetTrigger>
      <SheetContent className="z-[105]">
        <SheetHeader>
          <SheetTitle>메뉴</SheetTitle>
          <SheetDescription className="sr-only">이인거 메뉴입니다.</SheetDescription>
        </SheetHeader>
        <ul className="p-5 space-y-5">
          {MENU_LIST.map((item) => (
            <li key={`sheet` + item.id}>
              <Button asChild className="py-6 w-full">
                <Link href={item.url}>{item.title}</Link>
              </Button>
            </li>
          ))}
          <li>
            <Button
              onClick={() => setTheme(theme == "light" ? "dark" : "light")}
              className="py-6 w-full"
            >
              <SunIcon />
              다크모드
            </Button>
          </li>
        </ul>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="py-6">닫기</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
