"use client";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function DoodleSamples() {
  const samples = PlaceHolderImages.slice(0, 3);

  return (
    <section className="py-16 sm:py-24" id="doodle-samples">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Um mundo de fofura para colorir
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore algumas das 30 ilustrações aconchegantes que esperam por você.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {samples.map((sample) => (
          <div key={sample.id} className="overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-lg">
            <Image
              src={sample.imageUrl}
              alt={sample.description}
              width={420}
              height={594}
              className="aspect-[210/297] w-full bg-white object-contain p-4 transition-transform duration-300 hover:scale-105"
              data-ai-hint={sample.imageHint}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
