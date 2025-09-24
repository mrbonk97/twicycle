import { Search } from "lucide-react";
import Form from "next/form";
import { MenuButton } from "../buttons/menu-button";

interface Props {
  baseUrl: string;
  placeholder?: string;
}

export function SearchSection({ baseUrl, placeholder = "검색어를 입력해주세요" }: Props) {
  return (
    <Form
      action={baseUrl}
      className="z-20 sticky top-0 hidden sm:block sm:relative h-12 sm:h-16 border-b bg-background"
    >
      <button
        type="submit"
        className="p-2 absolute left-2 top-1/2 -translate-y-1/2 rounded-lg hover:bg-secondary duration-150"
      >
        <span className="sr-only">검색</span>
        <Search className="text-blue-400" />
      </button>
      <MenuButton className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2" />
      <input name="q" className="h-full p-4 pl-14" placeholder={placeholder} />
    </Form>
  );
}
