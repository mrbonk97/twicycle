"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LocationType } from "@/types/type";
import { LocateFixedIcon, MapPinIcon, Menu } from "lucide-react";
import { NonExistList } from "@/components/none-exist-list";

interface Props {
  id: string | undefined;
  q: string | undefined;
  locations: LocationType[];
}

export const MobileBottomNav = ({ id, q, locations }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (q) setIsExpanded(locations.length != 1);
    if (id) setIsExpanded(false);
  }, [id, q, locations.length]);

  return (
    <nav
      className={`fixed z-[101] lg:hidden !duration-500 ease-in-out left-0 bottom-0 right-0 h-[85%] rounded-t-2xl border-t bg-background !shadow-lg
        ${isExpanded ? "translate-y-0" : "translate-y-[calc(100%-64px)]"}`}
    >
      <button
        onClick={() => setIsExpanded((cur) => !cur)}
        className="absolute left-1/2 -translate-x-1/2 -top-10 rounded-full p-2 bg-background hover:opacity-80"
      >
        <Menu size={16} />
      </button>

      <h4 onClick={() => setIsExpanded((cur) => !cur)} className="p-5 text-lg font-medium">
        {q ? `검색: ${q}` : "자전거 대여소"}
      </h4>

      <ul className="h-full overflow-y-auto">
        {locations.length === 0 && <NonExistList />}
        {locations.map((item) => (
          <li key={`list-${item.id}`}>
            <Link
              href={q ? `/?id=${item.id}&q=${q}` : `/?id=${item.id}`}
              scroll={false}
              aria-checked={item.id == id}
              className="p-5 border-b flex gap-2 items-center justify-between aria-checked:bg-secondary"
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
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
