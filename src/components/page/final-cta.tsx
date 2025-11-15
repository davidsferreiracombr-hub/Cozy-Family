"use client";

import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

export function FinalCta() {
  return (
    <section className="w-full py-16 sm:py-24 bg-primary/5">
      <div className="container text-center">
        <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Pronto para Criar Memórias Inesquecíveis?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Não espere mais para transformar momentos em família. Garanta seu acesso vitalício e comece a colorir, brincar e se conectar hoje mesmo.
        </p>
        <div className="mt-8">
          <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg" asChild>
            <a href="#buy-now">
              <Sparkles className="mr-3 h-6 w-6" />
              Quero Minha Oferta Agora!
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
