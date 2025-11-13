"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck } from 'lucide-react';

const includedFeatures = [
    "Acesso vitalício ao app de colorir",
    "30 ilustrações originais",
    "PDF bônus para imprimir",
    "Use em celular, tablet ou computador",
]

export function BuySection() {
  return (
    <section id="buy-now" className="py-20 md:py-32">
        <Card
        className="mx-auto w-full max-w-lg overflow-hidden rounded-xl shadow-2xl"
        role="region"
        aria-label="Comprar Cozy Coloring"
        >
            <CardHeader className="bg-muted/30 p-8 text-center">
                <CardTitle className="text-3xl font-bold tracking-tight">Garanta seu Acesso Vitalício</CardTitle>
                <div className="mt-4 text-5xl font-extrabold text-foreground">
                    R$ 14,90
                </div>
                <CardDescription className="mt-2 text-lg text-muted-foreground">
                    Pagamento único. Use para sempre.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
                <ul className="mb-8 space-y-4 text-left text-muted-foreground">
                    {includedFeatures.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-base">{feature}</span>
                        </li>
                    ))}
                </ul>
                
                <Button
                    size="lg"
                    className="w-full text-lg h-12 font-bold"
                    asChild
                >
                    <a
                        href="https://pay.cakto.com.br/oc4ztnt_639973"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Comprar Agora
                    </a>
                </Button>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-green-600" />
                    <span>Pagamento seguro e acesso imediato.</span>
                </div>
            </CardContent>
        </Card>
    </section>
  );
}
