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
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function DoodleSamples() {
  const samples = PlaceHolderImages.slice(0, 3);

  return (
    <div className="pt-4" id="doodle-samples">
      <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Amostras de Ilustrações
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
        Um convite para colorir e relaxar com nossos desenhos.
      </p>
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="group mt-8 w-full sm:mt-12"
      >
        <CarouselContent className="-ml-4">
          {samples.map((sample) => (
            <CarouselItem
              key={sample.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden rounded-xl border-border/10 shadow-lg transition-shadow hover:shadow-xl">
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
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-background/50 text-foreground opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-background/75 sm:left-4">
          <ArrowLeft className="h-5 w-5" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-background/50 text-foreground opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-background/75 sm:right-4">
          <ArrowRight className="h-5 w-5" />
        </CarouselNext>
      </Carousel>
    </div>
  );
}
