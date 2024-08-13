import { RefObject } from "react";
import { create } from "zustand";

export interface NaverState {
  naverMap: naver.maps.Map | null;
  setNaverMap: (map: naver.maps.Map) => void;
}

export const useNaverMapStoreBase = create<NaverState>()((set) => ({
  naverMap: null,
  setNaverMap: (map: naver.maps.Map) => set({ naverMap: map }),
}));

// const createNaverMapSlice: StateCreator<NaverMapSlice> = (set) => ({
//   mapRef: null,
//   setMapRef: (ref: HTMLDivElement) => set({ mapRef: ref }),
// });

// const useStore = create<NaverMapSlice>()((...a) => ({
//   ...createNaverMapSlice(...a),
// }));
