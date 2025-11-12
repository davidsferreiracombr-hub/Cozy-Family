"use client";

import { Card, CardContent } from '@/components/ui/card';
import { FileDown, Image as ImageIcon, Printer, Tablet, Smartphone } from 'lucide-react';
import Image from 'next/image';

const benefits = [
    {
        icon: <ImageIcon className="h-8 w-8 text-primary" />,
        label: '30 Ilustrações Exclusivas',
        description: 'Desenhos fofos e aconchegantes, criados com carinho para você.',
    },
    {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        label: 'Aplicativo de Colorir',
        description: 'Uma forma divertida de pintar digitalmente no seu dispositivo favorito.',
    },
    {
        icon: <FileDown className="h-8 w-8 text-primary" />,
        label: 'Acesso Imediato ao PDF',
        description: 'Baixe o arquivo em alta resolução assim que confirmar a compra.',
    },
    {
        icon: <Tablet className="h-8 w-8 text-primary" />,
        label: 'Use no Tablet ou Imprima',
        description: 'Compatível com apps de desenho e otimizado para impressão em A4.',
    },
];

export function WhatYouGet() {
  return (
    <div id="what-you-get">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          O que você recebe
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Ao adquirir o Cozy Coloring, você tem acesso instantâneo a um mundo de criatividade e relaxamento.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((item, index) => (
          <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg border-border/10">
            {item.icon}
            <h3 className="mt-4 text-lg font-bold">{item.label}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
