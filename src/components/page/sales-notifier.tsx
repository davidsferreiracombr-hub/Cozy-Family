"use client";

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const names = [
    'Ana P.', 'João V.', 'Maria C.', 'Lucas G.', 'Juliana S.', 'Pedro H.',
    'Beatriz M.', 'Gabriel F.', 'Laura R.', 'Matheus A.', 'Sofia L.',
    'Enzo B.', 'Isabella T.', 'Davi O.', 'Lívia M.', 'Carla B.', 'Ricardo N.',
    'Fernanda P.', 'Thiago M.', 'Amanda J.', 'Bruno K.', 'Letícia C.',
    'Felipe D.', 'Camila Z.', 'Rodrigo A.', 'Vanessa S.', 'Eduardo T.',
    'Priscila E.', 'Gustavo X.', 'Patrícia G.', 'Vinícius R.', 'Mariana O.',
    'Leonardo F.', 'Daniela V.', 'Rafael Q.'
];

const locations = [
    'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Curitiba, PR',
    'Porto Alegre, RS', 'Salvador, BA', 'Fortaleza, CE', 'Recife, PE',
    'Brasília, DF', 'Goiânia, GO', 'Florianópolis, SC', 'Vitória, ES',
    'Manaus, AM', 'Belém, PA', 'Campo Grande, MS', 'Natal, RN', 'Maceió, AL',
    'João Pessoa, PB', 'Teresina, PI', 'Aracaju, SE'
];

export function SalesNotifier() {
    const { toast } = useToast();

    useEffect(() => {
        const showRandomToast = () => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            
            toast({
                className: cn('p-3 bg-background/95 backdrop-blur-sm'),
                description: (
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="font-medium text-xs text-foreground/90">
                            {randomName} de {randomLocation} comprou Cozy Coloring.
                        </span>
                    </div>
                ),
            });
        };

        let toastTimeout: NodeJS.Timeout;

        const scheduleToast = () => {
            showRandomToast();
            toastTimeout = setTimeout(scheduleToast, 30000);
        };

        const initialTimeout = setTimeout(scheduleToast, 8000);

        return () => {
            clearTimeout(initialTimeout);
            clearTimeout(toastTimeout);
        };
    }, [toast]);

    return null;
}
