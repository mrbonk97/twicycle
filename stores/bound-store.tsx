import { create } from "zustand";
import { createLocationSlice, LocationSlice } from "./location-slice";
import { createMapSlice, MapSlice } from "./map-slice";
import { createModalSlice, ModalSlice } from "./modal-slice";

type BoundSlice = LocationSlice & MapSlice & ModalSlice;

export const useBoundStore = create<BoundSlice>()((...a) => ({
  ...createLocationSlice(...a),
  ...createMapSlice(...a),
  ...createModalSlice(...a),
}));
