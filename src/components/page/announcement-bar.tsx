"use client";

const messages = [
    "Feliz Natal da Cozy Family! 🎄",
    "A experiência de colorir mais fofa e relaxante 🎨",
    "Relaxe, crie e divirta-se com um tema festivo! 💖",
];

export function AnnouncementBar() {
  return (
    <div className="relative flex h-10 w-full overflow-x-hidden bg-primary text-primary-foreground">
      <div className="animate-marquee whitespace-nowrap py-2">
        {messages.map((message, index) => (
            <span key={index} className="mx-8 text-sm font-medium">{message}</span>
        ))}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2">
        {messages.map((message, index) => (
            <span key={index} className="mx-8 text-sm font-medium">{message}</span>
        ))}
      </div>
    </div>
  );
}
