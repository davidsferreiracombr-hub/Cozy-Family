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
    <div className="mt-6" id="doodle-samples">
      <h3 className="text-base font-semibold text-foreground">
        Amostras de Ilustrações
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Um convite para colorir e relaxar
      </p>
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="mt-4 w-full"
      >
        <CarouselContent className="-ml-2">
          {samples.map((sample) => (
            <CarouselItem
              key={sample.id}
              className="basis-3/4 pl-2 md:basis-1/2"
            >
              <div className="overflow-hidden rounded-md border border-foreground/20 bg-card dark:bg-secondary">
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
