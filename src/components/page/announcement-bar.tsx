"use client";

import { Sparkles } from 'lucide-react';

export function AnnouncementBar() {
  const message = "Bem-vindo ao Cozy Coloring";
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-center px-0 py-2 text-sm font-medium overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-center gap-12">
            <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>{message}</span>
            </div>
             <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>{message}</span>
            </div>
             <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>{message}</span>
            </div>
             <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>{message}</span>
            </div>
        </div>
        <div className="animate-marquee-2 flex min-w-full shrink-0 items-center justify-center gap-12">
            <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>{message}</span>
            </div>
             <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>{message}</span>
            </div>
             <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>{message}</span>
            </div>
             <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>{message}</span>
            </div>
        </div>
      </div>
    </div>
  );
}
