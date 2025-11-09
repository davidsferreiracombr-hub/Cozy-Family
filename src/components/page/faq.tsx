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
    q: 'Receberei o link para download após o pagamento?',
    a: 'Sim — após a confirmação do pagamento, você receberá um link para download no e-mail informado durante a compra.',
  },
  {
    q: 'Posso usar o livro de colorir em um tablet?',
    a: 'Sim — o arquivo PDF funciona perfeitamente com aplicativos de pintura digital como Procreate, GoodNotes, e outros.',
  },
  {
    q: 'Quais são as formas de pagamento aceitas?',
    a: 'Aceitamos as principais formas de pagamento, incluindo cartão de crédito, débito e Pix. Tudo de forma segura.',
  },
  {
    q: 'O acesso ao livro de colorir é vitalício?',
    a: 'Sim, uma vez adquirido, o acesso ao arquivo PDF é seu para sempre. Você pode baixar e imprimir quantas vezes quiser.',
  },
];

export function Faq() {
  return (
    <div id="faq" className="w-full max-w-3xl mx-auto">
      <h2 className="mb-6 text-center text-3xl font-extrabold text-foreground">
        Perguntas Frequentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-semibold">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
