import { cn } from '@/lib/utils';
import { CreditCard, Barcode } from 'lucide-react';

const paymentMethods = [
  {
    name: 'Pix',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="h-6 w-6"
      >
        <path
          fill="currentColor"
          d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm65.78,136.22-32,32a8,8,0,0,1-11.32-11.32L176.69,155H88a8,8,0,0,1,0-16h88.69l-26.23-26.22a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,193.78,160.22Z"
        />
      </svg>
    ),
  },
  {
    name: 'Boleto',
    icon: <Barcode className="h-6 w-6" />,
  },
  {
    name: 'Cartão de Crédito',
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    name: 'PicPay',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M12.33 5.43c-2.3-.15-4.22.9-5.12 3.12-.48 1.15-.42 2.66.17 3.91.43.92 1.11 1.76 1.94 2.45.54.45 1.14.83 1.79 1.13 1.25.58 2.6.85 3.92.65 2.11-.32 3.8-1.74 4.53-3.79.4-1.12.44-2.5.03-3.73a5.53 5.53 0 0 0-2.3-3.13c-1.33-.87-2.9-1.2-4.48-1.1-1.3.09-2.5.56-3.48 1.34Zm-2.28 2.37c.6-.48 1.3-.77 2.05-.85.9-.1 1.78.13 2.53.64.9.59 1.5 1.54 1.63 2.65.1.84.03 1.7-.28 2.46-.42 1.05-1.32 1.88-2.4 2.22-.8.25-1.64.22-2.4-.08-1.03-.42-1.84-1.2-2.25-2.2-.42-1.02-.42-2.2.03-3.21.32-.7.84-1.28 1.49-1.63Z" />
        <path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12Zm10 8c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
      </svg>
    ),
  },
  {
    name: 'Apple Pay',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M19.34 14.28a4.57 4.57 0 0 1-1.4 3.23c-.7.66-1.5.99-2.37.99-.81 0-1.55-.3-2.21-.9-.66-.6-1.21-1.48-1.63-2.61H16.2c.07.24.16.45.29.62.13.17.3.3.49.38.2.08.41.12.63.12.35 0 .66-.09.91-.26.25-.17.38-.4.38-.69 0-.21-.07-.39-.2-.53-.14-.14-.36-.21-.66-.21h-1.4v-1.12h1.34c.28 0 .5-.06.66-.19.16-.13.24-.3.24-.54 0-.22-.08-.4-.25-.53s-.38-.2-.65-.2c-.2 0-.39.04-.54.12-.15.08-.27.2-.36.37H9.28c.36-1.11 1-2.02 1.83-2.73s1.82-1.06 2.94-1.06c.88 0 1.68.22 2.41.65.73.43 1.28 1.03 1.65 1.79.37.76.56 1.58.56 2.45 0 .91-.21 1.76-.63 2.54z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
  },
  {
    name: 'Google Pay',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M19.34 9.17h-2.13v1.8h2.13c.48 0 .88.39.88.87v5.29c0 .48-.4.87-.88.87h-6.73a2.3 2.3 0 0 1-2.29-2.29v-5.22c0-.4.1-.78.29-1.12H6.78V12h3.34v-1.28H6.78V9.17h3.75c.67-1.1 1.85-1.84 3.19-1.84 1.12 0 2.13.52 2.76 1.34l.86-.49C16.5 7.1 15.17 6.5 13.72 6.5c-1.85 0-3.46.99-4.32 2.47H4.66v1.55h2.12v2.56H4.66v1.55h2.12c0 2.06 1.68 3.73 3.74 3.73h6.82c1.37 0 2.48-1.11 2.48-2.48V10.04c0-.48-.4-.87-.88-.87z" />
        <path d="M13.72 8.08c-1.03 0-1.88.84-1.88 1.88s.85 1.88 1.88 1.88 1.88-.84 1.88-1.88-.84-1.88-1.88-1.88zm0 2.98c-.6 0-1.1-.49-1.1-1.1s.5-1.1 1.1-1.1 1.1.49 1.1 1.1-.5 1.1-1.1 1.1z" />
      </svg>
    ),
  },
];

export function PaymentMethods() {
  return (
    <div className="mt-8 w-full max-w-sm">
      <p className="text-center text-sm font-medium text-muted-foreground">
        Formas de Pagamento Seguras
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className="flex flex-col items-center justify-center rounded-lg border border-border/10 bg-background/50 p-3 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            title={method.name}
          >
            {method.icon}
            <span className="mt-1 text-[10px] font-medium sr-only">
              {method.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
