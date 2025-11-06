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

export function MainContent() {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle id="product-title">Sobre o “Cozy Coloring”</CardTitle>
          <CardDescription>
            “Cozy Coloring” é um PDF com <strong>30 ilustrações</strong>,
            desenhadas para oferecer momentos simples de{' '}
            <strong>bem-estar</strong>. São <strong>traços suaves</strong>,{' '}
            <strong>formas fofas</strong> e <strong>temas acolhedores</strong> —
            pensados para todas as idades. O arquivo vem em páginas para
            impressão em A4 (ou uso digital).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-foreground">O que vem no PDF</h3>
          <ul className="ml-5 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
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
              Arquivos em PDF simples, pronto para <strong>imprimir</strong> ou{' '}
              <strong>colorir no tablet</strong>;
            </li>
            <li>
              Atendimento para todas as idades — ótimo para{' '}
              <strong>relaxar</strong>, aulas, ou{' '}
              <strong>momentos em família</strong>.
            </li>
          </ul>

          <DoodleSamples />
          <Features />

          <h2 className="mt-6 text-xl font-semibold tracking-tight">
            Como usar
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Imprima em A4 ou use num tablet com app de pintura. Ideal para
            tardes calmas, atividade em família, salas de aula ou para
            presentear.
          </p>

          <Testimonials />
        </CardContent>
      </Card>
    </main>
  );
}
