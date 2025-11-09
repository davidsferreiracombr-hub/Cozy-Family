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

function getRandomItem<T>(arr: T[]): T {
    const [item, setItem] = React.useState<T | null>(null);

    React.useEffect(() => {
        setItem(arr[Math.floor(Math.random() * arr.length)]);
    }, [arr])

    return item as T;
}

export function SalesNotifier() {
    const { toast } = useToast();

    useEffect(() => {
        let toastTimeout: NodeJS.Timeout;

        const showRandomToast = () => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];

            toast({
                className: cn('p-3'),
                title: (
                    <div className="flex items-center gap-3">
                        <ShoppingBag className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-sm text-foreground/90">
                            {randomName} de {randomLocation} comprou Cozy Coloring.
                        </span>
                    </div>
                ),
            });

            // Schedule the next toast at a random interval
            const randomInterval = Math.random() * (25000 - 10000) + 10000; // between 10-25 seconds
            toastTimeout = setTimeout(showRandomToast, randomInterval);
        };

        // Start the first toast after a short delay
        const initialTimeout = setTimeout(showRandomToast, 8000); // 8 seconds delay for the first one

        // Cleanup function to clear timeouts when the component unmounts
        return () => {
            clearTimeout(initialTimeout);
            clearTimeout(toastTimeout);
        };
    }, [toast]);

    return null; // This component does not render anything
}
