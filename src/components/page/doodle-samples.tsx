"use client";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export function DoodleSamples() {
  const samples = PlaceHolderImages.slice(0, 3);

  return (
    <div className="mt-6">
      <h3 className="text-base font-semibold text-foreground">
        Amostras de Ilustrações
      </h3>
      <p className="text-sm text-muted-foreground">
        Imagens para todas as idades
      </p>
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="mt-3 w-full"
      >
        <CarouselContent className="-ml-2">
          {samples.map((sample) => (
            <CarouselItem
              key={sample.id}
              className="pl-2 basis-4/5 md:basis-1/2"
            >
              <div className="overflow-hidden rounded-md bg-card shadow-[0_8px_30px_rgba(83,62,64,0.08)] dark:bg-secondary">
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
