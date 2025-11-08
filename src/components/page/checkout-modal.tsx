"use client";

import { useModal } from '@/context/modal-context';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export function CheckoutModal() {
  const { isOpen, closeModal } = useModal();
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handlePayment = () => {
    if (!email || !email.includes('@')) {
      toast({
        title: 'E-mail inválido',
        description:
          'Por favor, insira um e-mail válido para receber o link de download.',
        variant: 'destructive',
      });
      return;
    }
    
    window.open('https://pay.cakto.com.br/oc4ztnt_639973', '_blank');
    closeModal();
    setEmail('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Finalizar compra — R$ 19,90</DialogTitle>
          <DialogDescription>
            Insira seu e-mail para receber o link de download após a confirmação
            do pagamento.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-left">
            E-mail
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@exemplo.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Pagamento e entrega via plataforma segura.
        </p>
        <DialogFooter className="flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button type="button" variant="secondary" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            type="submit"
            onClick={handlePayment}
            className="rounded-lg font-bold transition-transform duration-150 ease-in-out hover:-translate-y-0.5 hover:bg-[#d86e86]"
          >
            Pagar R$ 19,90
          </Button>
        </DialogFooter>
        <p className="text-xs text-muted-foreground">
          Observação: Este é um exemplo. A integração real com um gateway de
          pagamento (Stripe, etc.) é necessária.
        </p>
      </DialogContent>
    </Dialog>
  );
}
