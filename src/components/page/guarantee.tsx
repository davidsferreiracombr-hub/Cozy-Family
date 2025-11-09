"use client";

import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-card p-8 text-center shadow-lg"
      id="guarantee"
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
          <ShieldCheck className="h-8 w-8" />
        </div>
      </div>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Sua Satisfação ou Seu Dinheiro de Volta!
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Sua compra é 100% segura. Se por qualquer motivo você não amar o livro de colorir, basta nos enviar um e-mail dentro de 7 dias e nós devolveremos seu dinheiro na hora. Sem perguntas, sem burocracia.
      </p>
    </div>
  );
}
