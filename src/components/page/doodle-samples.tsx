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
    <div className="mt-8 pt-4" id="doodle-samples">
      <h3 className="text-center text-xl font-semibold text-foreground">
        Amostras de Ilustrações
      </h3>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Um convite para colorir e relaxar
      </p>
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="mt-6 w-full"
      >
        <CarouselContent className="-ml-2">
          {samples.map((sample) => (
            <CarouselItem
              key={sample.id}
              className="basis-3/4 pl-2 md:basis-1/2"
            >
              <div className="overflow-hidden rounded-xl border-2 border-foreground/10 bg-card p-2 shadow-sm dark:bg-secondary">
                <div className="relative aspect-[210/297] w-full overflow-hidden rounded-lg">
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
