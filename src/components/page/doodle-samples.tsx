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
      <h2 className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">
        Amostras de Ilustrações
      </h2>
      <p className="mt-2 text-center text-base text-muted-foreground sm:text-lg">
        Um convite para colorir e relaxar com nossos desenhos.
      </p>
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="mt-8 w-full sm:mt-12"
      >
        <CarouselContent className="-ml-4">
          {samples.map((sample) => (
            <CarouselItem
              key={sample.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden rounded-xl border-border/10 shadow-xl">
                <div className="relative aspect-[210/297] w-full bg-white flex items-center justify-center p-4">
                  <Image
                    src={sample.imageUrl}
                    alt={sample.description}
                    width={210}
                    height={297}
                    className="object-contain h-full w-full transition-transform duration-300 hover:scale-105"
                    data-ai-hint={sample.imageHint}
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14 hidden sm:flex" />
        <CarouselNext className="mr-14 hidden sm:flex" />
      </Carousel>
    </div>
  );
}
