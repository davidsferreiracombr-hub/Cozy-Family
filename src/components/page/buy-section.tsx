"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck, Star } from 'lucide-react';
import { CountdownTimer } from './countdown-timer';
import { UpsellModal } from './upsell-modal';

const basicFeatures = [
    {
        text: "App de Colorir Interativo",
        details: "Animações, tema claro e escuro, e mais.",
        icon: <Star className="h-5 w-5 text-primary flex-shrink-0 mt-1" />,
        value: "R$ 29,90"
    },
    {
        text: "30 ilustrações em PDF para imprimir",
        details: null,
        icon: <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />,
        value: "R$ 19,90"
    },
    {
        text: "Garantia de 7 dias para sua segurança",
        details: null,
        icon: <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />,
        value: "Incluso"
    }
]

const familyFeatures = [
    {
        text: "Tudo do Plano Básico +",
        details: null,
        icon: <Star className="h-5 w-5 text-primary flex-shrink-0 mt-1" />,
        value: null,
    },
    {
      text: "App Exclusivo de Brincadeiras em Família",
      details: "Um app com jogos e quizzes para todas as idades.",
      icon: <Star className="h-5 w-5 text-primary flex-shrink-0 mt-1" />,
      value: "R$ 39,90"
    },
    {
      text: "Jogo da Memória com 30 cartas",
      details: "Para imprimir e se divertir longe das telas.",
      icon: <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />,
      value: "R$ 19,90"
    },
]

export function BuySection() {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const offerEndTime = new Date();
  offerEndTime.setMinutes(offerEndTime.getMinutes() + 15);

  return (
    <>
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
                          <span className="text-xl font-medium text-muted-foreground line-through">De R$ 49,80</span>
                          <div className="mt-2 text-5xl font-extrabold text-foreground">
                              Por R$ 7,90
                          </div>
                          <p className="mt-2 text-lg text-muted-foreground">
                              Economize R$ 41,90
                          </p>
                      </div>
                      
                      <Button
                          size="lg"
                          variant="outline"
                          className="w-full text-lg h-14 font-bold shadow-lg"
                          onClick={() => setIsUpsellModalOpen(true)}
                      >
                          <Star className="mr-3 h-6 w-6" />
                          Comprar Agora
                      </Button>
                      <ul className="mt-8 space-y-4 text-left text-muted-foreground">
                          {basicFeatures.map((feature, index) => (
                             <li key={index} className="flex items-start justify-between gap-3">
                                  <div className="flex items-start gap-3">
                                    {feature.icon}
                                    <div className="flex flex-col">
                                        <span className={`text-base ${feature.details ? 'font-semibold text-foreground/90' : ''}`}>{feature.text}</span>
                                        {feature.details && <span className="text-sm">{feature.details}</span>}
                                    </div>
                                  </div>
                                  {feature.value && <span className="font-bold text-primary flex-shrink-0">{feature.value}</span>}
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
                          <span className="text-xl font-medium text-muted-foreground line-through">De R$ 109,60</span>
                          <div className="mt-2 text-5xl font-extrabold text-foreground">
                              Por R$ 19,90
                          </div>
                          <p className="mt-2 text-lg text-muted-foreground">
                              Economize R$ 89,70
                          </p>
                      </div>
                      
                      <Button
                          size="lg"
                          className="w-full text-lg h-14 font-bold shadow-lg"
                          asChild
                      >
                          <a
                              href="https://pay.cakto.com.br/qv8kb6v_651065"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <Star className="mr-3 h-6 w-6" />
                              Quero o Plano Família
                          </a>
                      </Button>
                      <ul className="mt-8 space-y-4 text-left text-muted-foreground">
                          {familyFeatures.map((feature, index) => (
                             <li key={index} className={`flex items-start gap-3 ${feature.value ? "justify-between" : ""}`}>
                                  <div className="flex items-start gap-3">
                                      {feature.icon}
                                      <div className="flex flex-col">
                                          <span className={`text-base ${feature.details ? 'font-semibold text-foreground/90' : 'font-bold text-foreground/90'}`}>{feature.text}</span>
                                          {feature.details && <span className="text-sm">{feature.details}</span>}
                                      </div>
                                  </div>
                                  {feature.value && <span className="font-bold text-primary flex-shrink-0">{feature.value}</span>}
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
      <UpsellModal 
        isOpen={isUpsellModalOpen} 
        onOpenChange={setIsUpsellModalOpen} 
      />
    </>
  );
}
