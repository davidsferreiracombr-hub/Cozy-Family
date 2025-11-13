"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake, Paintbrush, TabletSmartphone, Palette, Star } from 'lucide-react';

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
    <section className="py-16 sm:py-24">
        <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tudo que você precisa para relaxar e colorir
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              De um aplicativo completo a ilustrações encantadoras, temos tudo para sua jornada criativa.
            </p>
        </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-border/20 bg-card text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <CardHeader className="flex justify-center items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                {feature.icon}
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
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
