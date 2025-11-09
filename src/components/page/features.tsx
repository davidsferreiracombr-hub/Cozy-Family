import { Card } from '@/components/ui/card';
import { HeartHandshake, Puzzle, Smile } from 'lucide-react';

const features = [
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    label: 'Relaxe e Desconecte',
    description:
      'Uma atividade terapêutica para aliviar o estresse do dia a dia.',
  },
  {
    icon: <Puzzle className="h-10 w-10 text-primary" />,
    label: 'Estimule a Criatividade',
    description:
      'Dê vida aos desenhos com suas cores e libere seu lado artístico.',
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    label: 'Para Todas as Idades',
    description:
      'Perfeito para crianças, adultos e para compartilhar em família.',
  },
];

export function Features() {
  return (
    <div>
      <h2 className="text-center text-3xl font-extrabold tracking-tight">
        Por que você vai amar o Cozy Coloring
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="flex flex-col items-center p-8 text-center"
          >
            {feature.icon}
            <h3 className="mt-4 text-xl font-semibold">{feature.label}</h3>
            <p className="mt-2 text-base text-muted-foreground">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
