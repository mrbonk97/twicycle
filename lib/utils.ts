import { REGIONS } from "@/asset/constant";
import { RENTAL_LOCATION } from "@/asset/rental-location";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRegionName(region: string) {
  const r = REGIONS.find((r) => r.region == region);
  if (!r) throw new Error(`지역을 찾을 수 없습니다. Region: ${region}`);
  return r.title;
}

export function getFilteredLocations(id?: string, q?: string, region?: string) {
  const locations = RENTAL_LOCATION.filter((l) => {
    if (id) return l.id == id;
    if (q && region) return l.region == region && (l.title.includes(q) || l.address.includes(q));
    if (q) return l.title.includes(q) || l.address.includes(q);
    if (region) return l.region == region;
    return true;
  });

  if (id && locations.length == 0) throw new Error(`장소를 찾을 수 없습니다. ID:${id}`);

  return locations;
}

export function getFilteredLocations2(q?: string, region?: string) {
  const locations = RENTAL_LOCATION.filter((l) => {
    if (q && region) return l.region == region && (l.title.includes(q) || l.address.includes(q));
    if (q) return l.title.includes(q) || l.address.includes(q);
    if (region) return l.region == region;
    return true;
  });

  return locations;
}

export type LocationType = (typeof RENTAL_LOCATION)[0];
