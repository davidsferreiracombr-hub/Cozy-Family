"use client";

import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

export function ForWho() {
  return (
    <div id="for-who" className="w-full">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Perfeito para Todos os Estilos
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Com temas e paletas de cores variadas, nosso livro agrada a todos, de crianças a adultos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Tema Delicado</h3>
            <Card className="overflow-hidden rounded-xl border-border/10 shadow-lg w-full max-w-md">
                <CardContent className="p-0">
                <Image
                    src="https://i.imgur.com/PBdaDyP.png"
                    alt="Demonstração do aplicativo de colorir com um tema de cores delicado"
                    width={500}
                    height={500}
                    className="object-contain w-full"
                    data-ai-hint="delicate coloring theme"
                />
                </CardContent>
            </Card>
        </div>
        <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Tema Vibrante</h3>
             <Card className="overflow-hidden rounded-xl border-border/10 shadow-lg w-full max-w-md">
                <CardContent className="p-0">
                <Image
                    src="https://i.imgur.com/U2JJeXF.png"
                    alt="Demonstração do aplicativo de colorir com um tema de cores vibrante"
                    width={500}
                    height={500}
                    className="object-contain w-full"
                    data-ai-hint="vibrant coloring theme"
                />
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
