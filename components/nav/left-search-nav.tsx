import Link from "next/link";
import { LocationType } from "@/types/type";
import { Logo } from "@/components/logo";
import { ChevronRight, LocateFixedIcon, MapPinIcon, SearchIcon } from "lucide-react";
import { NonExistList } from "../none-exist-list";
import Form from "next/form";

interface Props {
  id: string | undefined;
  q: string | undefined;
  locations: LocationType[];
}

export const LeftSearchNav = ({ id, q, locations }: Props) => {
  return (
    <aside
      className={`hidden lg:block fixed z-40 top-0 bottom-0 w-96 bg-background border-r !duration-500 overflow-y-auto left-20`}
    >
      <div className="p-5 flex2 border-b bg-secondary relative">
        <Logo />
      </div>

      <Form action={"/"} className="relative border-b">
        <button type="submit" className="absolute top-1/2 left-4 -translate-y-1/2 pr-2 border-r">
          <SearchIcon size={16} />
        </button>
        <input name="q" className="pl-12 h-12 w-full" placeholder="검색" />
      </Form>

      <ul>
        {locations.length == 0 && <NonExistList />}

        {locations.map((item) => (
          <li key={`list-${item.id}`}>
            <Link
              scroll={false}
              aria-checked={item.id == id}
              href={q ? `/?id=${item.id}&q=${q}` : `/?id=${item.id}`}
              className="px-5 py-10 border-b flex gap-2 items-center justify-between group hover:bg-secondary aria-checked:bg-secondary"
            >
              <hgroup className="space-y-1">
                <h4 className="font-medium">{item.title}</h4>
                <p className="flex items-center gap-1 text-sm">
                  <MapPinIcon size={12} />
                  {item.address}
                </p>
                <p className="flex items-center gap-1 text-sm">
                  <LocateFixedIcon size={12} />
                  {item.location}
                </p>
              </hgroup>
              <ChevronRight className="group-hover:text-blue-400 group-hover:translate-x-2" />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
