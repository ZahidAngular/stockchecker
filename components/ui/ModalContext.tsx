"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Ctx = { open: boolean; openModal: () => void; closeModal: () => void };

const ModalContext = createContext<Ctx>({
  open: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
