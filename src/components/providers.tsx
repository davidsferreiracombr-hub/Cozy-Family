"use client";

import { ModalProvider } from "@/context/modal-context";
import { Toaster } from "@/components/ui/toaster";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <Toaster />
    </ModalProvider>
  );
}
