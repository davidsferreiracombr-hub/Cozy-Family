"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="py-20 text-center md:py-32" aria-labelledby="hero-title">
      <div className="mx-auto mb-8 max-w-3xl">
        <h1
          id="hero-title"
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          A experiência de colorir mais <span className="text-primary">fofa e relaxante</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Liberte sua criatividade com 30 ilustrações no estilo Bobbie Goods. Pinte no app ou imprima o PDF bônus.
        </p>
      </div>

      <div className="mb-10 flex justify-center">
        <Button size="lg" asChild>
          <a href="#buy-now">
            <Sparkles className="mr-2 h-5 w-5" />
            Comprar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>

      <div className="relative mx-auto w-full max-w-4xl">
        <Image
          src="https://i.imgur.com/NgKmfL8.png"
          alt="Cozy Coloring book cover"
          width={1200}
          height={900}
          className="w-full rounded-lg object-cover shadow-2xl"
          data-ai-hint="coloring book cover"
          priority
        />
      </div>
    </section>
  );
}
