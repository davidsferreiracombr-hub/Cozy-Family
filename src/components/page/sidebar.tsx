import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarBuyCard } from './sidebar-buy-card';
import { Faq } from './faq';

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-4">
      <SidebarBuyCard />
      <Card>
        <CardHeader>
          <CardTitle>Detalhes</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>
            Formato: PDF • Páginas: 30 • Estilo: ilustrativo, traços suaves •
            Para todas as idades.
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-1">
            <li>Arquivo único em PDF (download)</li>
            <li>Impressão A4 recomendada</li>
            <li>Uso pessoal; para revenda, entre em contato</li>
          </ul>
        </CardContent>
      </Card>
      <Faq />
    </aside>
  );
}
