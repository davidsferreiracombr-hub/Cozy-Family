"use client";

import { Button } from '@/components/ui/button';
import { Eye, Wand2 } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section
      className="relative rounded-2xl bg-card p-6 text-center shadow-lg md:p-8"
      aria-labelledby="hero-title"
    >
      <div className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        <span className="text-primary">Cozy</span> Coloring
      </div>
      <p className="mx-auto mt-2 max-w-2xl text-base text-muted-foreground sm:text-lg">
        tema <strong>Bobbie Goods</strong>
      </p>

      <div className="mt-8 grid grid-cols-1 items-center gap-8 text-left sm:mt-10 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
          <Image
            src="https://i.imgur.com/NgKmfL8.png"
            alt="Cozy Coloring book cover"
            width={600}
            height={450}
            className="w-full rounded-lg object-cover"
            data-ai-hint="coloring book cover"
          />
        </div>
        <div>
          <h1
            id="hero-title"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            A experiência de colorir mais fofa e relaxante, agora no seu dispositivo.
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Liberte sua criatividade com nosso aplicativo de colorir interativo. E para uma experiência tátil, leve suas obras de arte para o papel com o nosso PDF complementar, pronto para imprimir.
          </p>
        </div>
      </div>

      <div
        className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12"
        role="group"
        aria-label="Call to action"
      >
        <Button
          size="lg"
          className="w-full sm:w-auto font-bold text-lg py-7 shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          asChild
        >
          <a href="#buy-now">
            <Wand2 className="mr-3 h-6 w-6" />
            Garantir Acesso Imediato
          </a>
        </Button>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="ghost" asChild>
            <a href="#doodle-samples">
              <Eye className="mr-2" />
              Ver amostras
            </a>
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Compre uma vez, use para sempre.
        </p>
      </div>
    </section>
  );
}
