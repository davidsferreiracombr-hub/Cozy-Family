"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck, ShoppingCart, Star } from 'lucide-react';
import { CountdownTimer } from './countdown-timer';

const basicFeatures = [
    "Acesso vitalício ao aplicativo de colorir",
    "30 ilustrações em PDF para imprimir",
    "Garantia de 7 dias para sua segurança"
]

const familyFeatures = [
    ...basicFeatures,
    {
      text: "App Exclusivo de Brincadeiras em Família",
      details: "+100 jogos para casa, Quiz com 12 categorias e +30 perguntas em cada."
    },
    "Jogo da Memória com 30 cartas para imprimir",
]

export function BuySection() {
  const offerEndTime = new Date();
  offerEndTime.setMinutes(offerEndTime.getMinutes() + 15);

  return (
    <section id="buy-now" className="w-full py-12 sm:py-20">
        <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                Oferta por Tempo Limitado
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Escolha o plano perfeito para você
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground mx-auto">
                Garanta sua vaga e comece a colorir agora mesmo. Você recebe acesso imediato a todo o conteúdo.
            </p>
            <div className="text-center pt-4">
                <p className="text-xl font-semibold text-primary">
                    A promoção termina em:
                </p>
                <CountdownTimer endTime={offerEndTime.toISOString()} />
            </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Plano Básico */}
            <Card
            className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-lg border"
            role="region"
            aria-label="Comprar Plano Básico"
            >
                <CardHeader className="bg-muted/30 p-6 text-center">
                    <CardTitle className="text-2xl font-bold tracking-tight">Plano Básico</CardTitle>
                </CardHeader>
                <CardContent className="p-8 bg-background">
                    <div className="mb-6 text-center">
                        <span className="text-xl font-medium text-muted-foreground line-through">De R$ 17,90</span>
                        <div className="mt-2 text-5xl font-extrabold text-foreground">
                            Por R$ 7,90
                        </div>
                        <p className="mt-2 text-lg text-muted-foreground">
                            Pagamento único.
                        </p>
                    </div>
                    
                    <Button
                        size="lg"
                        variant="outline"
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
                    <ul className="mt-8 space-y-4 text-left text-muted-foreground">
                        {basicFeatures.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                                <span className="text-base">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            {/* Plano Família */}
            <Card
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-2xl border-2 border-primary"
            role="region"
            aria-label="Comprar Plano Família"
            >
                <div className="absolute top-0 right-0 -mr-1 -mt-1 z-10">
                    <div className="flex items-center gap-1 bg-primary text-primary-foreground font-bold py-2 px-4 rounded-full text-sm -translate-x-2 translate-y-2">
                        <Star className="h-4 w-4" />
                        <span>Mais Popular</span>
                    </div>
                </div>
                <CardHeader className="bg-primary/10 p-6 text-center">
                    <CardTitle className="text-2xl font-bold tracking-tight text-primary">Plano Família</CardTitle>
                </CardHeader>
                <CardContent className="p-8 bg-background">
                    <div className="mb-6 text-center">
                        <span className="text-xl font-medium text-muted-foreground line-through">De R$ 39,90</span>
                        <div className="mt-2 text-5xl font-extrabold text-foreground">
                            Por R$ 19,90
                        </div>
                        <p className="mt-2 text-lg text-muted-foreground">
                            Acesso vitalício completo.
                        </p>
                    </div>
                    
                    <Button
                        size="lg"
                        className="w-full text-lg h-14 font-bold shadow-lg"
                        asChild
                    >
                        <a
                            href="https://pay.cakto.com.br/xxxxx_xxxxxx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Star className="mr-3 h-6 w-6" />
                            Quero o Plano Família
                        </a>
                    </Button>
                    <ul className="mt-8 space-y-4 text-left text-muted-foreground">
                        {familyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                {typeof feature === 'string' ? (
                                    <>
                                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                        <span className="text-base">{feature}</span>
                                    </>
                                ) : (
                                    <>
                                        <Star className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                        <div className="flex flex-col">
                                            <span className="text-base font-semibold text-foreground/90">{feature.text}</span>
                                            <span className="text-sm">{feature.details}</span>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span>Pagamento 100% seguro e acesso imediato.</span>
        </div>
    </section>
  );
}
