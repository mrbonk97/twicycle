import { LocationType } from "@/types/type";
import { RefObject } from "react";

export const initMap = (
  mapDivRef: RefObject<HTMLDivElement | null>,
  center?: { lat: number; lng: number } | null
) => {
  if (!mapDivRef.current) return null;

  const { naver } = window;
  if (!naver) return null;

  const pos = new naver.maps.LatLng(
    center ? center.lat : 37.5850113953,
    center ? center.lng : 126.8205125895
  );

  return new naver.maps.Map(mapDivRef.current, {
    center: pos,
    zoom: 16,
  });
};

export const moveToCoordinate = (map: naver.maps.Map, marker: naver.maps.Marker) => {
  const lat = marker.getPosition().y;
  const lng = marker.getPosition().x;
  const obj = new naver.maps.LatLng(lat, lng);
  map.panTo(obj);
  marker.setAnimation(naver.maps.Animation.BOUNCE);
  setTimeout(() => marker.setAnimation(null), 2100);
};

export const addMarker = (
  map: naver.maps.Map,
  location: LocationType,
  draggable = false,
  isFocused = false,
  onClick?: () => void
) => {
  const pos = new naver.maps.LatLng(location.lat, location.lng);

  const marker = new naver.maps.Marker({
    map,
    position: pos,
    title: location.id,
    draggable: draggable,
    icon: isFocused ? "/images/marker-focus.png" : undefined,
  });

  if (onClick) marker.addListener("click", onClick);

  return marker;
};

export const addMarker2 = (map: naver.maps.Map, lat: number, lng: number) => {
  const pos = new naver.maps.LatLng(lat, lng);
  const marker = new naver.maps.Marker({
    map,
    position: pos,
    draggable: true,
  });

  return marker;
};
