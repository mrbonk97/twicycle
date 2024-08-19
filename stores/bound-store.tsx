import { create } from "zustand";
import { createLocationSlice, LocationSlice } from "./location-slice";
import { createMapSlice, MapSlice } from "./map-slice";
import { createModalSlice, ModalSlice } from "./modal-slice";
import { createMenuSlice, MenuSlice } from "./menu-slice";

type BoundSlice = LocationSlice & MapSlice & ModalSlice & MenuSlice;

export const useBoundStore = create<BoundSlice>()((...a) => ({
  ...createLocationSlice(...a),
  ...createMapSlice(...a),
  ...createModalSlice(...a),
  ...createMenuSlice(...a),
}));
