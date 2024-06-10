import { create } from "zustand";

type NewAccountState = {
  isOpen: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
};

const useNewAccount = create<NewAccountState>((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));

export { useNewAccount };
