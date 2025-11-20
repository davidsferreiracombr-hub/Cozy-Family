"use client";

import Image from 'next/image';
import { Gamepad2, Lightbulb, HelpCircle, Snowflake } from 'lucide-react';

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
    <section id="exclusive-app" className="w-full bg-gray-900 py-20 sm:py-32">
      <div className="container flex flex-col items-center text-center">
        <div className="max-w-3xl">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                Exclusivo do Plano Família
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 flex items-center justify-center gap-3">
                <Snowflake className="h-8 w-8 text-primary" />
                E de Bônus... Um App para a Família!
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-12">
                Além de colorir, o Plano Família desbloqueia um aplicativo exclusivo, pensado para criar momentos inesquecíveis e fortalecer os laços.
            </p>
            <div className="space-y-6 max-w-lg mx-auto">
                {appFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4 text-left">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 border-white/20 border shadow-sm flex-shrink-0">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-white">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Image
          src="https://i.imgur.com/xwajIuD.png"
          alt="Demonstração do aplicativo de brincadeiras em família"
          width={800}
          height={600}
          className="object-contain mt-12"
          data-ai-hint="family game app"
        />
      </div>
    </section>
  );
}
