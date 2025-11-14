"use client";

import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-center py-4 bg-background border-b">
        <div className="flex items-center gap-2">
            <Heart className="h-7 w-7 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
                Cozy Family
            </h1>
        </div>
    </header>
  );
}
