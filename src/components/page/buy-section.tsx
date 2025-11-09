"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShoppingBag } from 'lucide-react';

const includedFeatures = [
    "30 ilustrações originais e fofas",
    "Acesso imediato ao arquivo PDF",
    "Pronto para imprimir ou colorir no tablet",
    "Perfeito para relaxar e estimular a criatividade",
    "Acesso vitalício ao seu livro digital"
]

export function BuySection() {
  return (
    <Card
      id="buy-now"
      className="w-full max-w-2xl mx-auto shadow-lg"
      role="region"
      aria-label="Comprar Cozy Coloring"
    >
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-3xl font-extrabold">Adquira sua Cópia Digital</CardTitle>
        <CardDescription className="text-lg text-muted-foreground pt-2">
          Receba acesso imediato a 30 ilustrações fofas e aconchegantes.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <div className="mb-6 text-6xl font-extrabold text-foreground">
          R$ 19,90
        </div>

        <ul className="mb-8 space-y-3 text-left text-muted-foreground">
            {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-base">{feature}</span>
                </li>
            ))}
        </ul>
        
        <Button
          size="lg"
          className="w-full max-w-md font-bold text-lg py-7 shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          asChild
        >
          <a
            href="https://pay.cakto.com.br/oc4ztnt_639973"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingBag className="mr-3 h-6 w-6" />
            Comprar Agora
          </a>
        </Button>
        <div className="mt-4 text-sm text-muted-foreground">
          Pagamento seguro • Arquivo entregue por e-mail após a confirmação.
        </div>
      </CardContent>
    </Card>
  );
}
