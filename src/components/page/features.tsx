"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake, Paintbrush, TabletSmartphone } from 'lucide-react';

const features = [
  {
    icon: <TabletSmartphone className="h-8 w-8 text-primary" />,
    label: 'App Interativo + PDF',
    description:
      'Pinte no seu dispositivo com nosso app ou imprima o PDF para uma experiência clássica.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    label: 'Relaxe e Desconecte',
    description:
      'Uma atividade terapêutica e divertida para aliviar o estresse e estimular a mente.',
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    label: 'Para Todas as Idades',
    description:
      'Ilustrações fofas e aconchegantes, perfeitas para crianças, adultos e para curtir em família.',
  },
];

export function Features() {
  return (
    <section className="py-20 md:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-none bg-transparent shadow-none text-center"
          >
            <CardHeader className="flex justify-center items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2 text-xl font-bold">{feature.label}</CardTitle>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
