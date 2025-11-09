"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export function SidebarBuyCard() {
  return (
    <Card
      id="buy-now"
      className="sticky top-8"
      role="complementary"
      aria-label="Comprar Cozy Coloring"
    >
      <CardHeader>
        <CardTitle className="text-xl">Adquira sua cópia digital</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-4 text-4xl font-extrabold text-foreground">
          R$ 19,90
        </div>
        <Button
          size="lg"
          className="w-full font-bold"
          asChild
        >
          <a
            href="https://pay.cakto.com.br/oc4ztnt_639973"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Comprar Agora
          </a>
        </Button>
        <div className="mt-3 text-xs text-muted-foreground">
          Pagamento seguro. Arquivo entregue por e-mail após a confirmação.
        </div>
      </CardContent>
    </Card>
  );
}
