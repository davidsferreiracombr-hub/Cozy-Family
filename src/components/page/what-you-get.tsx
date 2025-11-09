"use client";

import { Card, CardContent } from '@/components/ui/card';
import { FileDown, Image as ImageIcon, Printer, Tablet } from 'lucide-react';
import Image from 'next/image';

const benefits = [
    {
        icon: <ImageIcon className="h-8 w-8 text-primary" />,
        label: '30 Ilustrações Exclusivas',
        description: 'Desenhos fofos e aconchegantes, criados com carinho para você.',
    },
    {
        icon: <FileDown className="h-8 w-8 text-primary" />,
        label: 'Acesso Imediato ao PDF',
        description: 'Baixe o arquivo em alta resolução assim que confirmar a compra.',
    },
    {
        icon: <Printer className="h-8 w-8 text-primary" />,
        label: 'Imprima em Casa',
        description: 'Perfeito para imprimir em papel A4 e colorir com seus materiais favoritos.',
    },
    {
        icon: <Tablet className="h-8 w-8 text-primary" />,
        label: 'Use no Tablet',
        description: 'Compatível com apps de desenho como Procreate, GoodNotes e outros.',
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
