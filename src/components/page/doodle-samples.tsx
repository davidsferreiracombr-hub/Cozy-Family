"use client";
import { useState } from 'react';
import { suggestPaletteAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Palette } from 'lucide-react';
import { CatDoodle } from '../icons/cat-doodle';
import { SweetsDoodle } from '../icons/sweets-doodle';
import { NatureDoodle } from '../icons/nature-doodle';
import { SceneDoodle } from '../icons/scene-doodle';

const samples = [
  {
    title: 'Animais',
    description: 'A cute and fluffy cat sitting down, with a whimsical feel.',
    svg: <CatDoodle />,
  },
  {
    title: 'Doces',
    description: 'A doodle of a delicious cupcake with a cherry on top.',
    svg: <SweetsDoodle />,
  },
  {
    title: 'Natureza',
    description: 'A dreamy landscape with soft clouds and gentle hills.',
    svg: <NatureDoodle />,
  },
  {
    title: 'Cenas Aconchegantes',
    description: 'A cozy room with a window and a warm blanket.',
    svg: <SceneDoodle />,
  },
];

interface DoodleSampleCardProps {
  title: string;
  description: string;
  svg: React.ReactNode;
}

function DoodleSampleCard({ title, description, svg }: DoodleSampleCardProps) {
  const [palette, setPalette] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSuggest = async () => {
    setLoading(true);
    setPalette([]);
    try {
      const result = await suggestPaletteAction({
        doodleDescription: description,
      });
      if (result && result.palette) {
        setPalette(result.palette);
      } else {
        toast({
          title: 'Erro',
          description:
            'Não foi possível sugerir uma paleta de cores. Tente novamente.',
          variant: 'destructive',
        });
      }
    } catch (e) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro. Tente novamente mais tarde.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[110px] flex-col items-center justify-center rounded-md bg-card p-4 shadow-[0_6px_14px_rgba(120,90,95,0.04)] dark:bg-secondary">
      {svg}
      <span className="mt-2.5 block text-sm font-semibold text-muted-foreground">
        {title}
      </span>
      <Button
        size="sm"
        variant="ghost"
        onClick={handleSuggest}
        disabled={loading}
        className="mt-2 h-8"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Palette className="mr-2 h-4 w-4" />
        )}
        Sugerir Cores
      </Button>
      {palette.length > 0 && (
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {palette.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className="h-6 w-6 rounded-full border shadow-inner"
              title={color}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function DoodleSamples() {
  return (
    <div className="mt-6">
      <h3 className="text-base font-semibold text-foreground">
        Amostras (com sugestão de cores por IA)
      </h3>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {samples.map((sample) => (
          <DoodleSampleCard
            key={sample.title}
            title={sample.title}
            description={sample.description}
            svg={sample.svg}
          />
        ))}
      </div>
    </div>
  );
}
