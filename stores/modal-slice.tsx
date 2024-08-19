import { LocationType } from "@/types";
import { StateCreator } from "zustand";

export interface ModalSlice {
  content: LocationType | null;
  isOpen: boolean;
  isOpening: boolean;
  isClosing: boolean;
  handleClose: () => void;
  handleOpen: (content: LocationType) => void;
}

export const createModalSlice: StateCreator<ModalSlice, [], [], ModalSlice> = (
  set
) => ({
  content: null,
  isOpen: false,
  isOpening: false,
  isClosing: true,
  handleClose: () => set({ isOpening: false, isClosing: false, isOpen: false }),
  handleOpen: (content: LocationType) => {
    set({ isOpen: true, isOpening: true, isClosing: false, content: content });
  },
});
