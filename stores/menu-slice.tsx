import { StateCreator } from "zustand";

export interface MenuSlice {
  isMinimized: boolean;
  changeMinimized: () => void;
}

export const createMenuSlice: StateCreator<MenuSlice, [], [], MenuSlice> = (
  set
) => ({
  isMinimized: false,
  changeMinimized: () => set((state) => ({ isMinimized: !state.isMinimized })),
});
