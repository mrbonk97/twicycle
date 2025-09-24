import Form from "next/form";
import { Search } from "lucide-react";
import { LogoButton } from "../buttons/logo-button";
import { LocationType } from "@/lib/utils";
import { LocationList } from "../section/location-list";
import { LocationInfoArticle } from "../section/location-info-article";

interface Props {
  q: string | undefined;
  location: LocationType | null | undefined;
  locations: LocationType[];
}

export function LocationLeftnav({ q, location, locations }: Props) {
  return (
    <aside className="z-[101] hidden lg:block fixed top-0 bottom-0 left-20 w-80 bg-background border-r">
      <div className="p-4 text-right">
        <LogoButton />
      </div>
      <Form action={"/"} className="relative border-y">
        <button type="submit" className="absolute top-1/2 -translate-y-1/2 left-2">
          <Search className="text-blue-400" />
          <span className="sr-only">검색</span>
        </button>
        <input name="q" className="pl-10 p-2" placeholder="검색어를 입력해주세요" />
      </Form>
      <div className="h-full overflow-x-hidden">
        <div className={`h-full w-[200%] grid grid-cols-2 duration-300 ${location ? "-translate-x-1/2" : ""}`}>
          <LocationList q={q} locations={locations} />
          <LocationInfoArticle q={q} location={location} />
        </div>
      </div>
    </aside>
  );
}
