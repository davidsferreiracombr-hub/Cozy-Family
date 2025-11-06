import { HeartHandshake, Puzzle, Smile } from 'lucide-react';

const features = [
  {
    icon: <HeartHandshake className="mx-auto h-9 w-9 text-muted-foreground" />,
    label: 'Relaxamento',
  },
  {
    icon: <Puzzle className="mx-auto h-9 w-9 text-muted-foreground" />,
    label: 'Simples & Acessível',
  },
  {
    icon: <Smile className="mx-auto h-9 w-9 text-muted-foreground" />,
    label: 'Para todas as idades',
  },
];

export function Features() {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold tracking-tight">Por que vai amar</h2>
      <div
        className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3"
        role="list"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-md bg-secondary p-3 text-center"
            role="listitem"
          >
            {feature.icon}
            <small className="mt-2 block font-semibold text-secondary-foreground">
              {feature.label}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
