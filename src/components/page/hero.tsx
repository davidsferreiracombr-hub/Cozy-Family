"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Eye, HelpCircle } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section
      className="rounded-xl bg-card p-6 text-center sm:p-8"
      aria-labelledby="hero-title"
    >
      <div className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
        <span className="text-primary">Cozy</span> Coloring
      </div>
      <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
        por <strong>Bobbie Goods</strong>
      </p>

      <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <Image
            src="https://i.imgur.com/zCChdNI.png"
            alt="Cozy Coloring book cover"
            width={600}
            height={450}
            className="w-full rounded-lg object-cover"
            data-ai-hint="coloring book cover"
            priority
          />
        </div>
        <div className="text-left">
          <h1
            id="hero-title"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Ilustrações fofas e aconchegantes para colorir e relaxar.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Perfeito para todas as idades, nosso livro digital oferece 30
            desenhos únicos para despertar sua criatividade e proporcionar
            momentos de paz.
          </p>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>
                <strong>30 ilustrações</strong> originais em alta resolução.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>
                Formato <strong>PDF pronto para imprimir</strong> ou usar em
                tablets.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>
                Acesso <strong>imediato</strong> após a compra.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="mt-10 flex flex-col items-center justify-center gap-4"
        role="group"
        aria-label="Call to action"
      >
        <Button asChild size="lg" className="w-full font-bold sm:w-auto">
          <a href="#buy-now">
            Comprar Agora por R$ 19,90
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="ghost" asChild>
            <a href="#doodle-samples">
              <Eye className="mr-2" />
              Ver amostras
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#faq">
              <HelpCircle className="mr-2" />
              Perguntas frequentes
            </a>
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Pagamento seguro • Acesso vitalício
        </p>
      </div>
    </section>
  );
}
