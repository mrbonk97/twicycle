import Form from "next/form";
import { Bird, ChevronLeft, MapPin, MapPinned, Search } from "lucide-react";
import { RENTAL_LOCATION } from "@/asset/rental-location";
import Link from "next/link";
import Image from "next/image";
import { LogoButton } from "../buttons/logo-button";

interface Props {
  q: string | undefined;
  location: (typeof RENTAL_LOCATION)[0] | null | undefined;
  locations: typeof RENTAL_LOCATION;
}

export function MainLeftSection({ q, location, locations }: Props) {
  return (
    <aside className="z-[101] shrink-0 absolute hidden lg:block top-0 left-20 h-full w-80 bg-background border-r">
      <div className="p-4 text-right">
        <LogoButton />
      </div>
      <Form action={"/"} className="relative border-y">
        <button className="absolute top-1/2 -translate-y-1/2 left-2">
          <Search className="text-blue-400" />
          <span className="sr-only">검색</span>
        </button>
        <input name="q" className="pl-10 p-2" placeholder="검색어를 입력해주세요" />
      </Form>
      <section className="h-[calc(100%-116px)] overflow-x-hidden">
        <div
          className={`h-full w-[40rem] grid grid-cols-2  duration-300
                ${location ? "" : "-translate-x-80"}`}
        >
          <Info q={q} location={location} />
          <List q={q} locations={locations} />
        </div>
      </section>
    </aside>
  );
}

interface ListProps {
  q: string | undefined;
  locations: typeof RENTAL_LOCATION;
}

const List = ({ q, locations }: ListProps) => (
  <ul className="overflow-y-auto pb-28 w-80">
    {locations.length == 0 && (
      <li className="border-b p-4 h-28 flex items-center justify-center gap-4">
        <Bird className=" text-blue-400" size={48} />
        <p className=" text-blue-400 font-semibold">등록된 장소가 없습니다.</p>
      </li>
    )}
    {locations.map((location) => (
      <li key={location.id}>
        <Link
          href={`/?id=${location.id}${q ? `&q=${q}` : ""}`}
          className="border-b p-4 h-28 flex justify-between gap-4 cursor-pointer aria-[current=page]:bg-secondary hover:bg-secondary duration-150"
        >
          <hgroup className="max-w-[11rem]">
            <h4 className="font-semibold opacity-80 text-ellipsis whitespace-nowrap overflow-hidden">
              {location.title}
            </h4>
            <p className="text-xs font-medium opacity-60 text-ellipsis whitespace-nowrap overflow-hidden">
              {location.address}
            </p>
          </hgroup>
          <Image
            height={320}
            width={320}
            alt={location.title}
            src={location.image ?? "/location-placeholder.jpg"}
            className="shrink-0 h-20 w-20 rounded-lg object-cover"
          />
        </Link>
      </li>
    ))}
  </ul>
);

interface InfoProps {
  q: string | undefined;
  location: (typeof RENTAL_LOCATION)[0] | null | undefined;
}

const Info = ({ q, location }: InfoProps) => {
  return (
    <article className="p-4 h-full w-80">
      <div className="flex justify-between gap-2">
        <h2 className="text-xl font-bold opacity-80 break-keep">{location?.title ?? "ㅤ"}</h2>
        <Link href={q ? `/?q=${q}` : "/"}>
          <ChevronLeft className="mt-1" />
        </Link>
      </div>
      <Image
        height={320}
        width={320}
        alt={location?.title ?? "placeholder"}
        src={location?.image ?? "/location-placeholder.jpg"}
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
};
