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
    q: 'Quais são as formas de pagamento aceitas?',
    a: 'Aceitamos as principais formas de pagamento, incluindo Pix, cartão de crédito e boleto. Sua compra é processada em um ambiente 100% seguro.',
  },
  {
    q: 'O acesso é vitalício?',
    a: 'Sim, uma vez adquirido, o acesso ao aplicativo e ao PDF é seu para sempre. Você pode usar e imprimir quantas vezes quiser, sem custos adicionais.',
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
