"use client";

import { Avatar, AvatarFallback } from '../ui/avatar';
import { Card, CardContent } from '../ui/card';

const testimonials = [
  {
    quote:
      'Simplesmente adorei — desenhos delicados e super relaxantes. Usei com meus sobrinhos e aproveitamos muito.',
    author: 'Marina S.',
    location: 'São Paulo, SP',
    avatar: 'M',
  },
  {
    quote:
      'Comprei para mim e também para presentear minha mãe. Qualidade excelente e super prazeroso de colorir.',
    author: 'Rafael L.',
    location: 'Rio de Janeiro, RJ',
    avatar: 'R',
  },
  {
    quote:
      'Design fofo e temas acolhedores. Recomendo para quem quer relaxar depois do trabalho.',
    author: 'Camila P.',
    location: 'Belo Horizonte, BH',
    avatar: 'C',
  },
];

export function Testimonials() {
  return (
    <div className="mt-12">
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
