import Link from "next/link";
import Image from "next/image";
import { LocationType } from "@/lib/utils";
import { Bird } from "lucide-react";

interface Props {
  q: string | undefined;
  locations: LocationType[];
}

export function LocationList({ q, locations }: Props) {
  return (
    <ul className="shrink-0 h-full bg-background overflow-y-auto">
      {locations.length == 0 && (
        <li className="border-b p-4 h-28 text-blue-400">
          <Bird className="mt-2 mx-auto" />
          <p className="mt-2 text-center">대여소가 없습니다.</p>
        </li>
      )}
      {locations.map((item) => (
        <li key={`location-list-${item.id}`}>
          <Link
            href={q ? `/?id=${item.id}&q=${q}` : `/?id=${item.id}`}
            className="border-b p-4 h-28 flex justify-between gap-4 cursor-pointer aria-[current=page]:bg-secondary hover:bg-secondary duration-150"
          >
            <hgroup className="max-w-[11rem]">
              <h4 className="font-semibold opacity-80 text-ellipsis whitespace-nowrap overflow-hidden">{item.title}</h4>
              <p className="text-xs font-medium opacity-60 text-ellipsis whitespace-nowrap overflow-hidden">
                {item.address}
              </p>
            </hgroup>
            <Image
              height={320}
              width={320}
              alt={item.title}
              src={item.image ?? "/location-placeholder.jpg"}
              className="shrink-0 h-20 w-20 rounded-lg object-cover"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
