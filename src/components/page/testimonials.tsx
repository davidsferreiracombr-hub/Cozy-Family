"use client";

import { Avatar, AvatarFallback } from '../ui/avatar';
import { Card, CardContent } from '../ui/card';

const testimonials = [
  {
    quote:
      'Minha filha amou! Ela passa horas colorindo no tablet com o aplicativo, e nos fins de semana imprimimos os desenhos para ela pintar com giz de cera. Ver a alegria dela não tem preço.',
    author: 'Ana Clara V.',
    location: 'Recife, PE',
    avatar: 'A',
  },
  {
    quote:
      'Fiquei com um pé atrás de comprar, mas o acesso chegou certinho no meu e-mail logo depois do pagamento. Agora, depois que as crianças dormem, finalmente tenho um tempinho pra mim. Abrir o app e colorir esses desenhos fofos virou meu ritual de paz.',
    author: 'Juliana M.',
    location: 'Porto Alegre, RS',
    avatar: 'J',
  },
  {
    quote:
      'Pegamos o plano Cozy Family e foi a melhor decisão. Além das ilustrações, o Jogo da Memória fez o maior sucesso no nosso "fim de semana sem telas". Um resgate das brincadeiras antigas. Valeu muito a pena!',
    author: 'Carlos F.',
    location: 'Belo Horizonte, MG',
    avatar: 'C',
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
