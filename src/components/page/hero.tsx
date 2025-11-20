"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Snowflake, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="w-full pt-12 sm:pt-16 flex items-center justify-center text-center bg-background">
      <div className="flex flex-col items-center">
         <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                <ShieldCheck className="h-4 w-4" />
                Pagamento 100% seguro
            </div>
            <h1
            id="hero-title"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground"
            >
            A magia do <span className="text-primary">Natal</span> para colorir em família
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Liberte sua criatividade com 30 ilustrações no estilo Bobbie Goods. Pinte no app ou imprima o PDF bônus.
            </p>
        </div>

        <div className="mt-8 flex justify-center">
            <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg" asChild>
            <a href="#buy-now">
                <Snowflake className="mr-3 h-6 w-6" />
                Quero Minha Oferta de Natal
                <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            </Button>
        </div>

        <Image
            src="https://i.imgur.com/5wah9nR.png"
            alt="Pré-visualização do livro de colorir Cozy Coloring"
            width={1280}
            height={720}
            className="mt-8 max-w-xl w-full rounded-2xl border-4 border-primary shadow-lg"
            priority
            data-ai-hint="coloring book preview"
        />

        <div className="mt-8 mb-12 max-w-3xl px-4 sm:px-6">
          <p className="text-xl font-quote font-medium text-muted-foreground">
            Cansado de ver seus filhos apenas nas telas? Resgate o tempo em família com uma atividade criativa e relaxante que todos vão amar.
          </p>
        </div>
      </div>
    </section>
  );
}
