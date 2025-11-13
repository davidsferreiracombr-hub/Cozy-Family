"use client";

import { CreditCard, Sparkles } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-center px-4 py-2 text-sm font-medium">
        <Sparkles className="mr-2 h-4 w-4" />
        <span>0% de taxa no Pix</span>
      </div>
    </div>
  );
}
