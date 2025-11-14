"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="w-full pt-12 sm:pt-16 flex items-center justify-center text-center bg-background">
      <div className="flex flex-col items-center">
         <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h1
            id="hero-title"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground"
            >
            A experiência de colorir mais <span className="text-primary">fofa e relaxante</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Liberte sua criatividade com 30 ilustrações no estilo Bobbie Goods. Pinte no app ou imprima o PDF bônus.
            </p>
        </div>

        <div className="mt-8 flex justify-center">
            <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg" asChild>
            <a href="#buy-now">
                <Sparkles className="mr-3 h-6 w-6" />
                Quero Minha Oferta
                <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            </Button>
        </div>

        <Image
            src="https://i.imgur.com/l8JUy8s.png"
            alt="Pré-visualização do livro de colorir Cozy Coloring"
            width={1280}
            height={720}
            className="mt-8 mb-12 object-contain max-w-xl px-4"
            priority
            data-ai-hint="coloring book preview"
        />
      </div>
    </section>
  );
}
