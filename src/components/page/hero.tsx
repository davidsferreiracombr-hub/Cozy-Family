"use client";

import { Button } from '@/components/ui/button';
import { Eye, HelpCircle, Lock } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section
      className="rounded-xl bg-card p-4 text-center shadow-lg shadow-primary/10 sm:p-7"
      aria-labelledby="hero-title"
    >
      <div className="text-4xl font-bold tracking-tight text-[#6b4950] dark:text-primary-foreground/90">
        <span className="font-extrabold text-primary">Cozy</span> Coloring{' '}
        <small className="font-medium text-muted"> — Bobbie Goods</small>
      </div>
      <div className="mx-auto mt-6 max-w-[280px]">
        <Image
          src="https://i.imgur.com/zCChdNI.png"
          alt="Cozy Coloring book cover"
          width={600}
          height={450}
          className="w-full rounded-lg object-cover"
          data-ai-hint="coloring book cover"
        />
      </div>
      <h1 id="hero-title" className="mt-6 text-lg text-muted-foreground">
        Ilustrações <strong>fofas</strong> e <strong>aconchegantes</strong> para{' '}
        <strong>colorir</strong> e <strong>relaxar</strong> — perfeitas para
        todas as idades.
      </h1>

      <div
        className="mt-8 flex flex-col items-center justify-center gap-4"
        role="group"
        aria-label="Call to action"
      >
        <div className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
          <div className="rounded-full bg-secondary px-4 py-2 text-base font-semibold text-secondary-foreground shadow-sm">
            30 artes • PDF • R$ 34,90
          </div>
          <Button
            asChild
            className="w-full rounded-full px-6 py-6 text-base font-bold shadow-lg shadow-primary/20 transition-transform duration-150 ease-in-out hover:-translate-y-0.5 hover:bg-[#d86e86] sm:w-auto"
            size="lg"
          >
            <a href="#buy-now">
              <Lock className="mr-2 h-5 w-5" />
              Comprar com segurança
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
           <Button variant="outline" className="rounded-full" asChild>
            <a href="#doodle-samples">
              <Eye />
              Ver amostras
            </a>
          </Button>
          <Button
            variant="ghost"
            className="rounded-full border border-transparent text-muted-foreground hover:border-secondary hover:bg-secondary"
            asChild
          >
            <a href="#faq">
              <HelpCircle />
              Perguntas frequentes
            </a>
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Pagamento seguro • Acesso imediato
        </p>
      </div>
    </section>
  );
}
