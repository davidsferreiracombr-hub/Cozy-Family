"use client";

const messages = [
    "Pagamento 100% seguro 🛡️",
    "Bem-vindo ao Cozy Coloring ✨",
    "A experiência de colorir mais fofa e relaxante 🎨",
    "Relaxe, crie e divirta-se 💖",
    "30 ilustrações no estilo Bobbie Goods 🧸",
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
