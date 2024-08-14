import { LocationType } from "@/types";
import { StateCreator } from "zustand";

export interface LocationSlice {
  location: LocationType | null;
  setLocation: (location: LocationType | null) => void;
}

export const createLocationSlice: StateCreator<
  LocationSlice,
  [],
  [],
  LocationSlice
> = (set) => ({
  location: null,
  setLocation: (location: LocationType | null) => set({ location: location }),
});

// const createSharedSlice: StateCreator<LocationSlice, [], [], LocationSlice> = (
//   set,
//   get
// ) => ({
//   addBoth: () => {
//     // you can reuse previous methods
//     get().addBear();
//     get().addFish();
//     // or do them from scratch
//     // set((state) => ({ bears: state.bears + 1, fishes: state.fishes + 1 })
//   },
//   getBoth: () => get().bears + get().fishes,
// });

// export const useBoundStore = create<LocationSlice>()((...a) => ({
//   ...createLocationSlice(...a),
// }));
