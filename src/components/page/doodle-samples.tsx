"use client";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function DoodleSamples() {
  const samples = PlaceHolderImages.slice(0, 3);

  return (
    <div className="mt-6">
      <h3 className="text-base font-semibold text-foreground">
        Amostras de Ilustrações
      </h3>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {samples.map((sample) => (
          <div
            key={sample.id}
            className="overflow-hidden rounded-md bg-card shadow-[0_6px_14px_rgba(120,90,95,0.04)] dark:bg-secondary"
          >
            <div className="relative aspect-[210/297] w-full">
              <Image
                src={sample.imageUrl}
                alt={sample.description}
                fill
                className="object-cover"
                data-ai-hint={sample.imageHint}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
