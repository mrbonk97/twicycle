import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

import { REGIONS } from "@/constants/constant";
import { RENTAL_LOCATION } from "@/constants/rental-location";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function rt(region: string | undefined, q?: string | undefined) {
  if (region) {
    const r = REGIONS.find((item) => item.region === region);
    if (!r) throw new Error(`Id에 해당하는 지역을 찾을 수 없습니다. Id: ${region}`);
    return r.title;
  }

  if (q) return `검색: ${q}`;
  return "목록 전체";
}

export function rt2(id?: string | undefined, q?: string | undefined) {
  if (id) {
    const location = RENTAL_LOCATION.find((item) => item.id == id);
    if (!location) throw new Error(`Id에 해당하는 대여소를 찾을 수 없습니다. Id: ${id}`);
    return location.title;
  }

  if (q) return `검색: ${q}`;
  return "지도";
}
