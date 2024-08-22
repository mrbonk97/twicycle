import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { LocationType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addMarker = (
  map: naver.maps.Map,
  content: LocationType,
  onClick: () => void
) => {
  if (!map) return null;

  const coordinate = new naver.maps.LatLng(content.lat, content.lng);
  const marker = new naver.maps.Marker({
    position: coordinate,
    map,
  });

  naver.maps.Event.addListener(marker, "click", function (e) {
    marker.setAnimation(naver.maps.Animation.BOUNCE);
    setTimeout(() => marker.setAnimation(null), 2150);
    map.panTo(e.coord);
    onClick();
  });

  return marker;
};

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
