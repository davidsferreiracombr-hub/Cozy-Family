"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useModal } from '@/context/modal-context';
import { ShoppingBag } from 'lucide-react';

export function SidebarBuyCard() {
  const { openModal } = useModal();

  return (
    <Card
      id="buy-now"
      className="bg-[linear-gradient(180deg,_#fff,_#fff)] text-center dark:bg-[linear-gradient(180deg,_hsl(var(--card)),_hsl(var(--card)))]"
      role="complementary"
      aria-label="Comprar Cozy Coloring"
    >
      <CardContent className="p-4">
        <div className="text-3xl font-extrabold text-[#5a3940] dark:text-primary-foreground">
          R$ 34,90
        </div>
        <div className="text-sm text-muted-foreground">30 ilustrações • PDF digital</div>
        <Button
          onClick={openModal}
          className="mt-4 w-full rounded-full px-5 py-6 font-bold shadow-lg transition-transform duration-150 ease-in-out hover:-translate-y-0.5 hover:bg-[#d86e86]"
          size="lg"
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          Comprar agora
        </Button>
        <div className="mt-2.5 text-xs text-muted-foreground">
          Pagamento seguro • Arquivo entregue por link após confirmação
        </div>
      </CardContent>
    </Card>
  );
}
