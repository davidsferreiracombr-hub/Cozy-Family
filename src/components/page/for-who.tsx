"use client";

import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Heart, Users } from 'lucide-react';

const whoIsItFor = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    label: 'Quem quer relaxar',
    description: 'Uma atividade terapêutica para aliviar a ansiedade e encontrar calma no dia a dia.',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    label: 'Mentes criativas',
    description: 'Perfeito para quem ama arte e quer explorar combinações de cores sem a pressão de desenhar do zero.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    label: 'Toda a família',
    description: 'Uma atividade divertida e unificadora para compartilhar com crianças, pais e avós.',
  },
];

export function ForWho() {
  return (
    <div className="text-center" id="for-who">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Perfeito para todos
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
        Seja para um momento de paz ou diversão em grupo, o Cozy Coloring foi feito para você.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-12 md:grid-cols-3">
        {whoIsItFor.map((item, index) => (
          <Card key={index} className="flex flex-col items-center p-8 text-center shadow-lg border-border/10">
            {item.icon}
            <h3 className="mt-4 text-xl font-bold">{item.label}</h3>
            <p className="mt-2 text-base text-muted-foreground">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
