import Link from "next/link";
import Image from "next/image";
import { LocationType } from "@/lib/utils";
import { ChevronLeft, MapPin, MapPinned } from "lucide-react";

interface Props {
  q: string | undefined;
  location: LocationType | null | undefined;
}

export function LocationInfoArticle({ q, location }: Props) {
  return (
    <article className="shrink-0 p-4 h-full bg-background overflow-y-auto">
      <div className="flex justify-between gap-2">
        <h2 className="text-xl font-bold opacity-80 break-keep">{location?.title || "ㅤ"}</h2>
        <Link href={q ? `/?q=${q}` : "/"}>
          <ChevronLeft className="mt-1" />
        </Link>
      </div>
      <Image
        height={320}
        width={320}
        alt={location?.title ?? "placeholder"}
        src={location?.image ?? "/images/location-placeholder.jpg"}
        className="mt-2 h-40 w-full object-cover rounded-lg"
      />
      <hgroup className="mt-2">
        <div className="flex items-center gap-1">
          <MapPin size={16} className="text-blue-400" />
          <span className="text-sm font-medium opacity-80">{location?.address}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPinned size={16} className="text-blue-400" />
          <span className="text-sm font-medium opacity-80">{location?.location}</span>
        </div>
      </hgroup>
      <ul className="mt-4 space-y-4 text-sm">
        <li>
          <div className="font-semibold">
            <span className="text-blue-400">·</span> <span className="opacity-60">운영기간</span>
          </div>
          <div className="font-medium opacity-80 whitespace-pre-line">{location?.businessMonth}</div>
        </li>
        <li>
          <div className="font-semibold">
            <span className="text-blue-400">·</span> <span className="opacity-60">운영시간</span>
          </div>
          <div className="font-medium opacity-80 whitespace-pre-line">{location?.businessHours}</div>
        </li>
        <li>
          <div className="font-semibold">
            <span className="text-blue-400">·</span> <span className="opacity-60">가격</span>
          </div>
          <div className="font-medium opacity-80 whitespace-pre-line">{location?.price}</div>
        </li>
        <li>
          <div className="font-semibold">
            <span className="text-blue-400">·</span> <span className="opacity-60">연락처</span>
          </div>
          <div className="font-medium opacity-80 whitespace-pre-line">{location?.contact}</div>
        </li>
      </ul>
    </article>
  );
}
