"use client";

import Image from 'next/image';
import { Gamepad2, Lightbulb, HelpCircle, Sparkles } from 'lucide-react';

const appFeatures = [
    {
        icon: <Gamepad2 className="h-7 w-7 text-primary" />,
        title: "+100 Brincadeiras",
        description: "Atividades criativas para fazer em casa, longe das telas."
    },
    {
        icon: <Lightbulb className="h-7 w-7 text-primary" />,
        title: "12 Categorias de Quiz",
        description: "Estimule a curiosidade e o diálogo com temas variados."
    },
    {
        icon: <HelpCircle className="h-7 w-7 text-primary" />,
        title: "+30 Perguntas por Tema",
        description: "Horas de diversão e conversa garantida para toda a família."
    }
]

export function ExclusiveApp() {
  return (
    <section id="exclusive-app" className="w-full bg-muted/30">
      <div className="container py-12 sm:py-20">
        {/* Text content */}
        <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                Exclusivo do Plano Família
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 flex items-center justify-center gap-3">
                <Sparkles className="h-8 w-8 text-primary" />
                E de Bônus... Um App para a Família!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
                Além de colorir, o Plano Família desbloqueia um aplicativo exclusivo, pensado para criar momentos inesquecíveis e fortalecer os laços.
            </p>
            <div className="space-y-6 max-w-lg mx-auto">
                {appFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4 text-left">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background border shadow-sm flex-shrink-0">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Image */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl">
              <Image
                src="https://imgur.com/ErKsHo2.png"
                alt="Demonstração do aplicativo de brincadeiras em família"
                width={800}
                height={600}
                className="w-full object-contain"
                data-ai-hint="family game app"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
