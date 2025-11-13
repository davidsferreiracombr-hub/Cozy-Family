"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck, Sparkles, ShoppingCart } from 'lucide-react';
import { CountdownTimer } from './countdown-timer';

const includedFeatures = [
    "Acesso vitalício ao aplicativo",
    "30 ilustrações em PDF para imprimir",
    "Garantia de 7 dias para sua segurança"
]

export function BuySection() {
  const offerEndTime = new Date();
  offerEndTime.setMinutes(offerEndTime.getMinutes() + 15);

  return (
    <section id="buy-now" className="w-full py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    Oferta por Tempo Limitado
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Adquira o Acesso Completo
                </h2>
                <p className="max-w-2xl text-lg text-muted-foreground mx-auto lg:mx-0">
                    Garanta sua vaga e comece a colorir agora mesmo. Você recebe acesso imediato a todo o conteúdo, incluindo o app interativo e o PDF para impressão.
                </p>
                <ul className="space-y-4 text-left text-muted-foreground max-w-md mx-auto lg:mx-0">
                    {includedFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <span className="text-base">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="flex flex-col items-center">
                <div className="text-center mb-4">
                    <p className="text-md text-muted-foreground">
                        A promoção termina em:
                    </p>
                    <CountdownTimer endTime={offerEndTime.toISOString()} />
                </div>
                <Card
                className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-2xl border-2 border-primary/50"
                role="region"
                aria-label="Comprar Cozy Coloring"
                >
                    <CardHeader className="bg-muted/30 p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <Sparkles className="h-6 w-6 text-primary" />
                            <CardTitle className="text-2xl font-bold tracking-tight">Plano Básico</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 bg-background">
                        <div className="mb-6 text-center">
                            <span className="text-xl font-medium text-muted-foreground line-through">De R$ 17,90</span>
                            <div className="mt-2 text-5xl font-extrabold text-foreground">
                                Por R$ 7,90
                            </div>
                            <p className="mt-2 text-lg text-muted-foreground">
                                Pagamento único. Acesso vitalício.
                            </p>
                        </div>
                        
                        <Button
                            size="lg"
                            className="w-full text-lg h-14 font-bold shadow-lg"
                            asChild
                        >
                            <a
                                href="https://pay.cakto.com.br/oc4ztnt_639973"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ShoppingCart className="mr-3 h-6 w-6" />
                                Comprar Agora
                            </a>
                        </Button>
                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <ShieldCheck className="h-5 w-5 text-green-600" />
                            <span>Pagamento 100% seguro e acesso imediato.</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
  );
}
