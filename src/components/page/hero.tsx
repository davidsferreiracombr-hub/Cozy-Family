"use client";

import { Button } from '@/components/ui/button';
import { useModal } from '@/context/modal-context';
import { HelpCircle, Sparkles } from 'lucide-react';

export function Hero() {
  const { openModal } = useModal();

  return (
    <section
      className="rounded-lg bg-[linear-gradient(180deg,_rgba(255,255,255,0.8),_rgba(255,255,255,0.9))] p-7 text-center shadow-[0_8px_30px_rgba(83,62,64,0.06)] dark:bg-[linear-gradient(180deg,_hsl(var(--card)/0.8),_hsl(var(--card)/0.9))]"
      aria-labelledby="hero-title"
    >
      <div className="text-3xl font-bold tracking-tight text-[#6b4950] dark:text-primary-foreground/90">
        <span className="font-extrabold text-primary">Cozy</span> Doodles{' '}
        <small className="font-medium text-muted"> — Boby Goods</small>
      </div>
      <h1 id="hero-title" className="mt-2.5 text-muted-foreground">
        Ilustrações fofas e aconchegantes para colorir e relaxar — perfeitas
        para todas as idades.
      </h1>

      <div
        className="mt-6 flex flex-wrap items-center justify-center gap-3"
        role="group"
        aria-label="Call to action"
      >
        <div className="rounded-full bg-secondary px-3 py-2 font-semibold text-secondary-foreground shadow-[0_4px_14px_rgba(216,150,160,0.12)]">
          30 artes • PDF • R$ 34,90
        </div>
        <Button
          onClick={openModal}
          className="rounded-full px-5 py-6 font-bold shadow-[0_8px_18px_rgba(232,143,160,0.16)] transition-transform duration-150 ease-in-out hover:-translate-y-0.5 hover:bg-[#d86e86]"
          size="lg"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Pagar R$ 34,90 — Quero agora
        </Button>
        <Button
          variant="ghost"
          className="rounded-md border border-secondary text-muted-foreground"
          asChild
        >
          <a href="#faq">
            <HelpCircle />
            Perguntas frequentes
          </a>
        </Button>
      </div>
    </section>
  );
}
