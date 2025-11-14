"use client";

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { firstNames, lastNames, locations } from '@/lib/notifications';
import { Sparkles } from 'lucide-react';

export function PurchaseNotifications() {
  const { toast } = useToast();

  const getRandomItem = <T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  useEffect(() => {
    const showRandomToast = () => {
      const name = `${getRandomItem(firstNames)} ${getRandomItem(lastNames)[0]}.`;
      const location = getRandomItem(locations);
      const plan = Math.random() > 0.4 ? 'Cozy Family' : 'Plano Básico';

      toast({
        description: (
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-foreground">{name}</p>
              <p className="text-sm text-muted-foreground">
                De {location} comprou o <strong className="text-primary">{plan}</strong>
              </p>
            </div>
          </div>
        ),
      });
    };

    const intervalId = setInterval(showRandomToast, 25000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [toast]);

  return null; // This component does not render anything itself
}
