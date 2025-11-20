"use client";

import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Paintbrush } from 'lucide-react';

export function AboutCreator() {
  return (
    <section id="about-creator" className="w-full py-12 sm:py-20">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <Image
          src="https://i.imgur.com/PUeJBdj.png"
          alt="Foto da criadora Bia"
          width={128}
          height={128}
          className="object-cover rounded-full w-32 h-32 mb-6 border-4 border-primary/20 shadow-lg"
          data-ai-hint="creator portrait"
        />
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 flex items-center justify-center gap-3">
            <Paintbrush className="h-8 w-8 text-primary" />
            De Coração para Coração
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            Oi, eu sou a Bia! Sou mãe, artista e completamente apaixonada por transformar pequenos momentos em memórias afetivas. O <strong>Cozy Family</strong> nasceu do desejo de criar um refúgio de paz e criatividade, um cantinho onde as famílias pudessem se desconectar do mundo lá fora e se conectar de verdade.
          </p>
          <p>
            Cada ilustração, cada jogo e cada detalhe foi pensado com o carinho de quem entende a importância de um abraço apertado e de uma risada compartilhada. Meu sonho é que, ao abrir este material, vocês sintam todo o amor que coloquei aqui.
          </p>
        </div>
      </div>
    </section>
  );
}
