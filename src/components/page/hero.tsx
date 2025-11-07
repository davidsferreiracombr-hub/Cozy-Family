"use client";

import { Button } from '@/components/ui/button';
import { useModal } from '@/context/modal-context';
import { Eye, HelpCircle, Lock } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const { openModal } = useModal();

  return (
    <section
      className="rounded-lg bg-[linear-gradient(180deg,_rgba(255,255,255,0.8),_rgba(255,255,255,0.9))] p-4 text-center shadow-[0_8px_30px_rgba(83,62,64,0.06)] dark:bg-[linear-gradient(180deg,_hsl(var(--card)/0.8),_hsl(var(--card)/0.9))] sm:p-7"
      aria-labelledby="hero-title"
    >
      <div className="text-3xl font-bold tracking-tight text-[#6b4950] dark:text-primary-foreground/90">
        <span className="font-extrabold text-primary">Cozy</span> Coloring{' '}
        <small className="font-medium text-muted"> — Bobbie Goods</small>
      </div>
      <div className="mx-auto mt-4 max-w-xs overflow-hidden rounded-lg shadow-lg">
        <Image
          src="https://i.imgur.com/zCChdNI.png"
          alt="Cozy Coloring book cover"
          width={600}
          height={450}
          className="w-full object-cover"
          data-ai-hint="coloring book cover"
        />
      </div>
      <h1 id="hero-title" className="mt-6 text-muted-foreground">
        Ilustrações <strong>fofas</strong> e <strong>aconchegantes</strong> para{' '}
        <strong>colorir</strong> e <strong>relaxar</strong> — perfeitas para
        todas as idades.
      </h1>

      <div
        className="mt-6 flex flex-col items-center justify-center gap-3"
        role="group"
        aria-label="Call to action"
      >
        <div className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
          <div className="rounded-full bg-secondary px-3 py-2 font-semibold text-secondary-foreground shadow-[0_4px_14px_rgba(216,150,160,0.12)]">
            30 artes • PDF • R$ 34,90
          </div>
          <Button
            onClick={openModal}
            className="w-full rounded-full px-5 py-6 font-bold shadow-[0_8px_18px_rgba(232,143,160,0.16)] transition-transform duration-150 ease-in-out hover:-translate-y-0.5 hover:bg-[#d86e86] sm:w-auto"
            size="lg"
          >
            <Lock className="mr-2 h-5 w-5" />
            Comprar com segurança
          </Button>
          <Button variant="outline" className="rounded-md" asChild>
            <a href="#doodle-samples">
              <Eye />
              Ver amostras
            </a>
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
        <p className="mt-2 text-xs text-muted-foreground">
          Pagamento seguro • Acesso imediato
        </p>
      </div>
    </section>
  );
}
