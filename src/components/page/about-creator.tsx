"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function AboutCreator() {
  return (
    <Card className="bg-card/50 overflow-hidden" id="about-creator">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        <div className="md:col-span-1 h-full w-full">
          <Image
            src="https://picsum.photos/seed/creator/400/500"
            alt="Bobbie Goods, a criadora do Cozy Coloring"
            width={400}
            height={500}
            className="object-cover h-full w-full"
            data-ai-hint="female artist portrait"
          />
        </div>
        <div className="md:col-span-2 p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Uma palavra da criadora
          </h2>
          <p className="mt-2 text-sm text-primary font-semibold">POR BOBBIE GOODS</p>
          <div className="mt-4 space-y-4 text-base text-muted-foreground">
            <p>
              "Olá! Eu sou a Bobbie, a ilustradora por trás de cada página que você encontra no Cozy Coloring. Minha paixão é criar arte que traga uma sensação de calor, conforto e alegria.
            </p>
            <p>
              Criei este livro pensando em oferecer um refúgio criativo para o seu dia a dia — um pequeno momento de paz para você relaxar, se reconectar e, claro, se divertir. Espero que você ame colorir estes desenhos tanto quanto eu amei criá-los."
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
