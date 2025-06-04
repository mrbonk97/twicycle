import { REGIONS } from "@/constants/constant";
import { RENTAL_LOCATION } from "@/constants/rental-location";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolveTitle(region?: string, q?: string): string {
  if (region) {
    const r = REGIONS.find((item) => item.region === region);
    if (!r) throw new Error("지역명을 찾을 수 없습니다.");
    return r.title;
  }

  if (q) return `검색: ${q}`;

  return "전체";
}

export function resolveTitle2(id?: string, q?: string): string {
  if (id) {
    const location = RENTAL_LOCATION.find((item) => item.id === id);
    if (!location) throw new Error("대여소를 찾을 수 없습니다.");
    return location.title;
  }

  if (q) return `검색: ${q}`;

  return "";
}
