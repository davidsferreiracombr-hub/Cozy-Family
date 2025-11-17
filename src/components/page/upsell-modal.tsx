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
import { CheckCircle, Gift, Star } from "lucide-react";
import Image from "next/image";

interface UpsellModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const familyPlanFeatures = [
    "Tudo do Plano Básico",
    "App de Brincadeiras em Família (Exclusivo)",
    "Jogo da Memória para Imprimir",
    "Mais de 100 atividades e quizzes",
    "Diversão para todas as idades",
];

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

        <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground">O que você ganha a mais:</h3>
                <ul className="space-y-2">
                    {familyPlanFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center items-center">
                <Image 
                    src="https://i.imgur.com/xwajIuD.png" 
                    alt="Bônus do Plano Família"
                    width={200}
                    height={200}
                    className="object-contain rounded-md"
                    data-ai-hint="family game app"
                />
            </div>
        </div>

        <AlertDialogFooter className="p-6 pt-4 flex-col sm:flex-col sm:space-x-0 gap-2">
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
