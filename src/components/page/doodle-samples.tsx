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
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="mt-3 -ml-4 w-full"
      >
        <CarouselContent>
          {samples.map((sample) => (
            <CarouselItem
              key={sample.id}
              className="basis-full pl-4 md:basis-1/2"
            >
              <div className="overflow-hidden rounded-md bg-card shadow-[0_6px_14px_rgba(120,90,95,0.04)] dark:bg-secondary">
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
