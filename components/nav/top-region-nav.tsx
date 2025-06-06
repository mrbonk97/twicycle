import { REGIONS } from "@/constants/constant";
import Link from "next/link";

interface Props {
  curRegion?: string;
}

export const TopRegionNav = ({ curRegion }: Props) => (
  <aside className="xl:hidden p-5 bg-secondary border-b">
    <ul className="text-sm flex items-center justify-center flex-wrap gap-5">
      {REGIONS.map((item) => (
        <li key={item.id}>
          <Link
            href={item.url}
            aria-selected={(item.id == 1 && curRegion == undefined) || item.region == curRegion}
            className="p-2 rounded-xl aria-selected:bg-background aria-selected:font-medium hover:bg-background/50 duration-150"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);
