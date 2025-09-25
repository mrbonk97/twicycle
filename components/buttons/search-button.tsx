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
import { Search } from "lucide-react";
import Form from "next/form";
interface Props {
  className?: string;
  baseUrl: string;
}

export function SearchButton({ baseUrl, className }: Props) {
  return (
    <Drawer direction="top">
      <DrawerTrigger className={cn("p-2 text-blue-400 rounded-lg hover:bg-secondary duration-150", className)}>
        <Search />
        <span className="sr-only">검색</span>
      </DrawerTrigger>
      <DrawerContent className="z-[102]">
        <DrawerHeader>
          <DrawerTitle className="text-left">검색</DrawerTitle>
          <DrawerDescription className="sr-only">대여소를 검색합니다.</DrawerDescription>
        </DrawerHeader>
        <Form action={baseUrl} className="my-4 py-4 px-8 relative">
          <DrawerClose asChild>
            <button
              type="submit"
              className="p-2 absolute left-8 top-1/2 -translate-y-1/2 rounded-lg hover:bg-secondary duration-150"
            >
              <span className="sr-only">검색</span>
              <Search className="text-blue-400" />
            </button>
          </DrawerClose>
          <input name="q" className="p-4 pl-10 border-b" placeholder="검색어를 입력해주세요" />
        </Form>
        <DrawerFooter>
          <DrawerClose className="p-2 rounded-lg bg-secondary">닫기</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
