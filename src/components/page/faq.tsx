import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Posso imprimir em casa?',
    a: 'Sim — o PDF está otimizado para impressão A4. Você pode imprimir em papel comum ou especial para colorir.',
  },
  {
    q: 'Receberei link após o pagamento?',
    a: 'Sim — após confirmação de pagamento, você receberá um link de download no e-mail informado no checkout.',
  },
  {
    q: 'Posso usar em tablet?',
    a: 'Sim — funciona muito bem com apps de pintura (ex: Procreate, GoodNotes, etc.).',
  },
];

export function Faq() {
  return (
    <div id="faq" className="w-full">
      <h3 className="mb-4 text-xl font-bold text-foreground">
        Perguntas Frequentes
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
