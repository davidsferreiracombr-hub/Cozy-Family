"use client";

import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Paintbrush } from 'lucide-react';

export function AboutCreator() {
  return (
    <section id="about-creator" className="w-full py-12 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Card className="overflow-hidden rounded-xl border-border/10 shadow-lg w-full max-w-sm">
            <CardContent className="p-0">
              <Image
                src="https://picsum.photos/seed/creator/500/500"
                alt="Foto da criadora Bia"
                width={500}
                height={500}
                className="object-cover w-full aspect-square"
                data-ai-hint="creator portrait"
              />
            </CardContent>
          </Card>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 flex items-center justify-center md:justify-start gap-3">
            <Paintbrush className="h-8 w-8 text-primary" />
            De Coração para Coração
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Oi, eu sou a Bia! Sou mãe, artista e completamente apaixonada por transformar pequenos momentos em memórias afetivas. O <strong>Cozy Family</strong> nasceu do desejo de criar um refúgio de paz e criatividade, um cantinho onde as famílias pudessem se desconectar do mundo lá fora e se conectar de verdade.
          </p>
          <p className="text-lg text-muted-foreground">
            Cada ilustração, cada jogo e cada detalhe foi pensado com o carinho de quem entende a importância de um abraço apertado e de uma risada compartilhada. Meu sonho é que, ao abrir este material, vocês sintam todo o amor que coloquei aqui.
          </p>
        </div>
      </div>
    </section>
  );
}
