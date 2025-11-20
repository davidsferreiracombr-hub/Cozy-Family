"use client";

import { Gift } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-center py-5 bg-background border-b shadow-sm">
        <div className="flex items-center gap-3">
            <Gift className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
                Cozy Family
            </h1>
        </div>
    </header>
  );
}
