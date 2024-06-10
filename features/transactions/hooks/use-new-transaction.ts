import { create } from "zustand";

type NewTransactionState = {
  isOpen: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
};

const useNewTransaction = create<NewTransactionState>((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));

export { useNewTransaction };
