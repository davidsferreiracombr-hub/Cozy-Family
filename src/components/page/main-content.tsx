import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DoodleSamples } from './doodle-samples';
import { Features } from './features';
import { Testimonials } from './testimonials';
import { Separator } from '../ui/separator';

export function MainContent() {
  return (
    <main className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle id="product-title" className="text-2xl font-bold">
            Sobre o “Cozy Coloring”
          </CardTitle>
          <CardDescription className="text-base">
            “Cozy Coloring” é um PDF com <strong>30 ilustrações</strong>,
            desenhadas para oferecer momentos simples de{' '}
            <strong>bem-estar</strong>. São <strong>traços suaves</strong>,{' '}
            <strong>formas fofas</strong> e <strong>temas acolhedores</strong> —
            pensados para todas as idades. O arquivo vem em páginas prontas para
            impressão em A4 ou uso digital.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold text-foreground">
            O que vem no PDF
          </h3>
          <ul className="ml-5 mt-3 list-disc space-y-2 text-muted-foreground">
            <li>
              <strong>30 páginas</strong> com desenhos <strong>originais</strong>{' '}
              e ilustrativos;
            </li>
            <li>
              Temas: <strong>animais fofos</strong>,{' '}
              <strong>natureza sonhadora</strong>, <strong>doces</strong> e{' '}
              <strong>cenas acolhedoras</strong>;
            </li>
            <li>
              Arquivo em PDF simples, pronto para <strong>imprimir</strong> ou{' '}
              <strong>colorir no tablet</strong>;
            </li>
            <li>
              Atende a todas as idades — ótimo para <strong>relaxar</strong>,
              usar em aulas, ou para <strong>momentos em família</strong>.
            </li>
          </ul>
        </CardContent>
      </Card>

      <DoodleSamples />
      <Features />
      <Testimonials />
    </main>
  );
}
