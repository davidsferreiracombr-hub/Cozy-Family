"use client";

import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

const testimonials = [
  {
    quote:
      'Minha filha amou! Ela passa horas colorindo no tablet com o aplicativo, e nos fins de semana imprimimos os desenhos para ela pintar com giz de cera. Ver a alegria dela não tem preço.',
    author: 'Ana Clara V.',
    location: 'Recife, PE',
    avatar: 'https://i.imgur.com/7LDvTXU.png',
    aiHint: 'woman portrait',
  },
  {
    quote:
      'Fiquei com um pé atrás de comprar, mas o acesso chegou certinho no meu e-mail logo depois do pagamento. Agora, depois que as crianças dormem, finalmente tenho um tempinho pra mim. Abrir o app e colorir esses desenhos fofos virou meu ritual de paz.',
    author: 'Juliana M.',
    location: 'Porto Alegre, RS',
    avatar: 'https://i.imgur.com/XQKnwcp.png',
    aiHint: 'woman portrait smiling',
  },
  {
    quote:
      'Pegamos o Plano Família e foi a melhor decisão. Além das ilustrações, o Jogo da Memória fez o maior sucesso no nosso "fim de semana sem telas". Um resgate das brincadeiras antigas. Valeu muito a pena!',
    author: 'Carlos F.',
    location: 'Belo Horizonte, MG',
    avatar: 'https://i.imgur.com/WyuDOuP.png',
    aiHint: 'man portrait',
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
          <Card key={index} className="flex flex-col justify-between p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardContent className="p-0">
                <blockquote className="text-base text-muted-foreground">
                    <p>"{testimonial.quote}"</p>
                </blockquote>
            </CardContent>
            <div className="mt-6 flex items-center">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={testimonial.avatar}
                  alt={`Foto de ${testimonial.author}`}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                  data-ai-hint={testimonial.aiHint}
                />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-base">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
