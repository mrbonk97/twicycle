import { StateCreator } from "zustand";

export interface MapSlice {
  naverMap: naver.maps.Map | null;
  setNaverMap: (map: naver.maps.Map) => void;
}

export const createMapSlice: StateCreator<MapSlice, [], [], MapSlice> = (
  set
) => ({
  naverMap: null,
  setNaverMap: (map: naver.maps.Map) => set({ naverMap: map }),
});
