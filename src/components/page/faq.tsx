"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'O que eu recebo exatamente após a compra?',
    a: 'Você recebe acesso imediato e vitalício tanto ao aplicativo de colorir interativo quanto ao livro em formato PDF, que contém todas as 30 ilustrações e está pronto para imprimir.',
  },
  {
    q: 'Como vou receber os arquivos?',
    a: 'Após a confirmação do pagamento, você receberá um link seguro por e-mail para baixar o PDF e acessar o aplicativo. O processo é rápido e automatizado.',
  },
  {
    q: 'Posso usar o aplicativo em um tablet, como o iPad?',
    a: 'Sim! O aplicativo interativo funciona em celulares, tablets e computadores. O PDF também é compatível com apps de desenho como Procreate e GoodNotes.',
  },
  {
    q: 'O acesso é vitalício?',
    a: 'Sim, uma vez adquirido, o acesso ao aplicativo e ao PDF é seu para sempre. Você pode usar e imprimir quantas vezes quiser, sem custos adicionais.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="w-full max-w-3xl mx-auto py-12 sm:py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Perguntas Frequentes
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-semibold no-underline hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
