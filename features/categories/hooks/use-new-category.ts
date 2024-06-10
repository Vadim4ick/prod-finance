import { create } from "zustand";

type NewCategoryState = {
  isOpen: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
};

const useNewCategory = create<NewCategoryState>((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));

export { useNewCategory };
