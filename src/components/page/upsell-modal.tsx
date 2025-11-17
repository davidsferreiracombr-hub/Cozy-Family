"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Gift, Star } from "lucide-react";
import Image from "next/image";

interface UpsellModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function UpsellModal({ isOpen, onOpenChange }: UpsellModalProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-lg p-0">
        <AlertDialogHeader className="p-6 pb-4 space-y-2">
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Gift className="h-7 w-7" />
            </div>
          </div>
          <AlertDialogTitle className="text-center text-2xl font-extrabold tracking-tight">
            Espere! Uma Oferta Especial!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-base text-muted-foreground max-w-md mx-auto">
            Por apenas <strong className="text-foreground">R$ 12 a mais</strong>, leve o <strong className="text-primary">Plano Família</strong> e transforme seus momentos!
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="px-6 pb-6">
            <div className="hidden md:grid grid-cols-2 gap-6 items-center bg-muted/30 p-4 rounded-lg border">
                <div>
                    <h3 className="font-bold text-foreground mb-2">O que você ganha a mais:</h3>
                    <p className="text-sm text-muted-foreground">
                        Acesso ao nosso <strong>aplicativo exclusivo de brincadeiras</strong> com quizzes e jogos para a família, além de um <strong>jogo da memória</strong> para imprimir e montar.
                    </p>
                </div>
                <Image 
                    src="https://i.imgur.com/xwajIuD.png" 
                    alt="Bônus do Plano Família"
                    width={300}
                    height={200}
                    className="object-contain rounded-md w-full"
                    data-ai-hint="family game app"
                />
            </div>
            <div className="md:hidden mt-2 text-center text-sm text-muted-foreground">
                <p>Leve também nosso <strong>app de brincadeiras</strong> e um <strong>jogo da memória exclusivo</strong> para imprimir e se divertir em família.</p>
            </div>
        </div>

        <AlertDialogFooter className="p-6 pt-0 flex-col sm:flex-col sm:space-x-0 gap-2">
          <Button
            size="lg"
            className="w-full text-lg h-12 font-bold shadow-md"
            asChild
          >
            <a
              href="https://pay.cakto.com.br/qv8kb6v_651065"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onOpenChange(false)}
            >
              <Star className="mr-2 h-5 w-5 animate-pulse" />
              Sim! Eu Quero o Plano Família!
            </a>
          </Button>
          <Button
            variant="link"
            className="text-sm text-muted-foreground hover:text-primary"
            asChild
          >
            <a
              href="https://pay.cakto.com.br/oc4ztnt_639973"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onOpenChange(false)}
            >
              Não, obrigado. Quero apenas o Plano Básico.
            </a>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
