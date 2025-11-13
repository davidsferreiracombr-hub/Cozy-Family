"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.imgur.com/NgKmfL8.png"
          alt="Cozy Coloring book cover"
          fill
          className="object-cover"
          data-ai-hint="coloring book cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      
      <div className="relative z-10 p-4 sm:p-6 flex flex-col items-center">
         <div className="mx-auto max-w-3xl">
            <h1
            id="hero-title"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-shadow"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            >
            A experiência de colorir mais <span className="text-primary">fofa e relaxante</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Liberte sua criatividade com 30 ilustrações no estilo Bobbie Goods. Pinte no app ou imprima o PDF bônus.
            </p>
        </div>

        <div className="mt-10 flex justify-center">
            <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg" asChild>
            <a href="#buy-now">
                <Sparkles className="mr-3 h-6 w-6" />
                Quero Minha Oferta
                <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
