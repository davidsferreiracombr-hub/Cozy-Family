"use client";

import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

export function AppExperience() {
  return (
    <div id="app-experience" className="w-full">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Uma Experiência Completa: App e PDF
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Pinte digitalmente com nosso aplicativo interativo ou imprima o PDF complementar para uma experiência clássica de colorir no papel.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Pinte no App</h3>
            <Card className="overflow-hidden rounded-xl border-border/10 shadow-lg w-full max-w-md">
                <CardContent className="p-0">
                <Image
                    src="https://i.imgur.com/PBdaDyP.png"
                    alt="Demonstração do aplicativo de colorir interativo"
                    width={500}
                    height={500}
                    className="object-cover w-full aspect-square"
                    data-ai-hint="app coloring"
                />
                </CardContent>
            </Card>
        </div>
        <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Imprima e Pinte</h3>
             <Card className="overflow-hidden rounded-xl border-border/10 shadow-lg w-full max-w-md">
                <CardContent className="p-0">
                <Image
                    src="https://i.imgur.com/U2JJeXF.png"
                    alt="Desenho impresso a partir do PDF complementar"
                    width={500}
                    height={500}
                    className="object-cover w-full aspect-square"
                    data-ai-hint="printed coloring page"
                />
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
