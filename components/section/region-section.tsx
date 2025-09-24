import { REGIONS } from "@/asset/constant";
import Link from "next/link";
import { LogoButton } from "../buttons/logo-button";

interface Props {
  region: string | undefined;
}

export function RegionSection({ region }: Props) {
  return (
    <aside className="fixed top-0 left-0 sm:left-20 hidden sm:block h-full w-40 lg:w-60 bg-card border-r">
      <div className="p-4 h-16 flex items-center justify-center border-b">
        <LogoButton />
      </div>
      <ul className="text-sm font-medium">
        {REGIONS.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              scroll={false}
              aria-current={item.region == region ? "page" : "false"}
              className="block h-12 p-4 text-right border-b aria-[current=page]:bg-secondary hover:bg-secondary duration-150"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
