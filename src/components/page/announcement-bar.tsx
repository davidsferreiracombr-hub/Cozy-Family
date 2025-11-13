"use client";

import { Sparkles } from 'lucide-react';

const messages = [
    "Bem-vindo ao Cozy Coloring ✨",
    "A experiência de colorir mais fofa e relaxante 🎨",
    "Relaxe, crie e divirta-se 💖",
    "30 ilustrações no estilo Bobbie Goods 🧸",
];

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground h-10 flex items-center overflow-hidden">
      <div className="w-full flex">
        <div className="animate-marquee-vertical-wrapper flex-none flex flex-col items-start w-full">
            <div className="animate-marquee-vertical py-2">
                {messages.map((message, index) => (
                    <p key={index} className="text-sm font-medium whitespace-nowrap px-4 leading-loose">{message}</p>
                ))}
            </div>
            <div className="animate-marquee-vertical py-2">
                 {messages.map((message, index) => (
                    <p key={index} className="text-sm font-medium whitespace-nowrap px-4 leading-loose">{message}</p>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
