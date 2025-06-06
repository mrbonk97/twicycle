import Link from "next/link";
import { REGIONS } from "@/constants/constant";

interface Props {
  curRegion?: string;
}

export const LeftRegionNav = ({ curRegion }: Props) => (
  <aside className="hidden xl:block fixed z-20 top-0 left-20 h-full w-72 bg-background border-r">
    <div className="p-5 h-20 flex2 text-center bg-secondary border-b text-lg font-medium">
      지역별 메뉴
    </div>
    <ul className="space-y-2">
      {REGIONS.map((item) => (
        <li key={item.id}>
          <Link
            href={item.url}
            aria-selected={(item.id == 1 && curRegion == undefined) || item.region == curRegion}
            className="block py-2 px-4 hover:bg-secondary/50 duration-150 aria-selected:font-medium aria-selected:bg-secondary"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);
