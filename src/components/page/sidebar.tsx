import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarBuyCard } from './sidebar-buy-card';
import { Faq } from './faq';

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-8">
      <SidebarBuyCard />
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Detalhes do Produto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            <strong>Formato:</strong> PDF Digital
            <br />
            <strong>Páginas:</strong> 30 ilustrações
            <br />
            <strong>Estilo:</strong> Traços suaves e fofos
            <br />
            <strong>Idade:</strong> Para todas as idades
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Arquivo único em PDF (download)</li>
            <li>Impressão A4 recomendada</li>
            <li>Compatível com apps de pintura digital</li>
            <li>Uso pessoal. Para licença comercial, entre em contato.</li>
          </ul>
        </CardContent>
      </Card>
      <Faq />
    </aside>
  );
}
