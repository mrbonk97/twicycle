import { REGIONS } from "@/asset/constant";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Funnel } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
}

export function RegionButton({ className }: Props) {
  return (
    <Drawer>
      <DrawerTrigger className={cn("p-2 text-blue-400 rounded-lg hover:bg-secondary duration-150", className)}>
        <Funnel />
        <span className="sr-only">지역 필터</span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-left">지역</DrawerTitle>
          <DrawerDescription className="text-left">지역으로 필터링합니다.</DrawerDescription>
        </DrawerHeader>
        <ul className="p-4 space-y-2 max-h-96 w-full overflow-y-auto">
          {REGIONS.map((item) => (
            <li key={`mobilt-${item.id}`} className="mx-auto max-w-96 w-full">
              <Link
                href={item.url}
                className="p-4 block w-full text-center bg-primary text-primary-foreground rounded-lg"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <DrawerFooter>
          <DrawerClose className="p-4 rounded-lg bg-secondary">닫기</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
