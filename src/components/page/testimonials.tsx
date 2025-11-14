"use client";

import { Avatar, AvatarFallback } from '../ui/avatar';
import { Card, CardContent } from '../ui/card';

const testimonials = [
  {
    quote:
      'Depois de colocar as crianças na cama, finalmente tenho um tempinho pra mim. Colorir esses desenhos fofos com uma xícara de chá virou meu ritual de paz. Simplesmente mágico.',
    author: 'Juliana M.',
    location: 'Porto Alegre, RS',
    avatar: 'J',
  },
  {
    quote:
      'Eu e minha filha de 7 anos passamos o fim de semana colorindo juntas, longe do celular. Foi incrível ver a criatividade dela fluir. Imprimimos as páginas e agora temos uma galeria de arte na porta da geladeira.',
    author: 'Ana Clara V.',
    location: 'Recife, PE',
    avatar: 'A',
  },
  {
    quote:
      'Comprei para minha avó, que sempre amou desenhar mas estava desanimada. Ela abriu um sorriso enorme! Disse que os desenhos a lembraram da infância. Um presente que valeu mais que mil palavras.',
    author: 'Beatriz L.',
    location: 'Curitiba, PR',
    avatar: 'B',
  },
];

export function Testimonials() {
  return (
    <div className="py-12 sm:py-20">
      <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
        O que nossos clientes dizem
      </h2>
      <div
        className="mt-8 grid grid-cols-1 gap-8 sm:mt-12 md:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
      >
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-lg border-border/10 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <blockquote className="text-lg text-foreground">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <div className="mt-4 flex items-center">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="text-lg font-bold bg-primary/10 text-primary">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
