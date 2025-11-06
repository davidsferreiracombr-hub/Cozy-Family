import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <Card id="faq">
      <CardHeader>
        <CardTitle>FAQ</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <p className="font-bold text-foreground">{faq.q}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{faq.a}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
