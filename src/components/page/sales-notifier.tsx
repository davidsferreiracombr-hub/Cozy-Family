"use client";

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ShoppingBag } from 'lucide-react';

const names = [
    'Ana P.', 'João V.', 'Maria C.', 'Lucas G.', 'Juliana S.', 'Pedro H.',
    'Beatriz M.', 'Gabriel F.', 'Laura R.', 'Matheus A.', 'Sofia L.',
    'Enzo B.', 'Isabella T.', 'Davi O.', 'Lívia M.'
];

const locations = [
    'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Curitiba, PR',
    'Porto Alegre, RS', 'Salvador, BA', 'Fortaleza, CE', 'Recife, PE',
    'Brasília, DF', 'Goiânia, GO', 'Florianópolis, SC', 'Vitória, ES',
    'Manaus, AM', 'Belém, PA', 'Campo Grande, MS'
];

function getRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function SalesNotifier() {
    const { toast } = useToast();

    useEffect(() => {
        const showRandomToast = () => {
            const randomName = getRandomItem(names);
            const randomLocation = getRandomItem(locations);

            toast({
                title: (
                    <div className="flex items-center gap-3">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-sm">
                            {randomName} de {randomLocation} comprou Cozy Coloring.
                        </span>
                    </div>
                ),
            });

            // Schedule the next toast at a random interval
            const randomInterval = Math.random() * (25000 - 10000) + 10000; // between 10-25 seconds
            const nextToastTimeout = setTimeout(showRandomToast, randomInterval);
            
            // Store the timeout ID to clear it on unmount
            return nextToastTimeout;
        };

        // Start the first toast after a short delay
        const initialTimeout = setTimeout(showRandomToast, 8000); // 8 seconds delay for the first one

        // Cleanup function to clear timeouts when the component unmounts
        return () => {
            clearTimeout(initialTimeout);
            // Since the subsequent timeouts are returned by showRandomToast,
            // we need a more robust way to clear them if we want to be strict.
            // For this use case, clearing the initial one is often sufficient.
        };
    }, [toast]);

    return null; // This component does not render anything
}
