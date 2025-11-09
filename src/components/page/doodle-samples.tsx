"use client";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '../ui/card';

export function DoodleSamples() {
  const samples = PlaceHolderImages.slice(0, 3);

  return (
    <div className="pt-4" id="doodle-samples">
      <h2 className="text-center text-3xl font-extrabold text-foreground">
        Amostras de Ilustrações
      </h2>
      <p className="mt-2 text-center text-lg text-muted-foreground">
        Um convite para colorir e relaxar com nossos desenhos.
      </p>
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="mt-8 w-full"
      >
        <CarouselContent className="-ml-4">
          {samples.map((sample) => (
            <CarouselItem
              key={sample.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden rounded-xl border-2">
                <div className="relative aspect-[210/297] w-full">
                  <Image
                    src={sample.imageUrl}
                    alt={sample.description}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={sample.imageHint}
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14" />
        <CarouselNext className="mr-14" />
      </Carousel>
    </div>
  );
}
