"use client";

import { cn } from '@/lib/utils';
import { CreditCard, Barcode } from 'lucide-react';

const paymentMethods = [
  {
    name: 'Pix',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-black"
      >
        <path d="M12.21,6.34,8.5,9.63l-.11.1a2.33,2.33,0,0,0,0,3.3l.11.1,3.71,3.29a2.33,2.33,0,0,0,3.3,0l3.71-3.29.11-.1a2.33,2.33,0,0,0,0-3.3l-.11-.1-3.71-3.29A2.33,2.33,0,0,0,12.21,6.34Z" />
        <path d="M11.79,17.66,8.5,14.37l-.11-.1a2.33,2.33,0,0,1,0-3.3l.11-.1,3.29-3.71a2.33,2.33,0,0,1,3.3,0l3.29,3.71.11.1a2.33,2.33,0,0,1,0,3.3l-.11.1-3.29,3.71A2.33,2.33,0,0,1,11.79,17.66Z" />
      </svg>
    ),
  },
  {
    name: 'Boleto',
    icon: <Barcode className="h-8 w-8 text-black" />,
  },
  {
    name: 'Cartão de Crédito',
    icon: <CreditCard className="h-8 w-8 text-black" />,
  },
  {
    name: 'PicPay',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-black"
      >
        <path d="M10.33,20.33H6.4a2,2,0,0,1-2-2V7.1a2,2,0,0,1,2-2h9.2a2,2,0,0,1,2,2v5.7" />
        <path d="M10.33,5.1V3.7a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2V5.1" />
        <rect x="15.63" y="14.33" width="6" height="6" rx="1.5" />
        <path d="M15.63,12.5a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2v-2a2,2,0,0,0-2-2h-2a2,2,0,0,0-2,2Z" />
      </svg>
    ),
  },
  {
    name: 'Apple Pay',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 64 64"
      >
        <path
          d="M43.918 10.999c-.732 3.996-3.13 7.533-6.19 9.873-2.923 2.22-6.52 3.499-10.592 3.499-1.396 0-2.822-.178-4.24-.526-4.324-1.07-8.04-3.55-10.53-7.234-5.38-7.98-.992-19.06 4.22-25.567 2.8-3.48 6.35-5.592 10.32-5.748 1.42-.057 2.928.257 4.32.793 1.282.486 2.533 1.16 3.682 1.942.23.155.45.32.656.495-.125.086-.25.17-.373.254-4.836 3.31-7.536 9.002-7.536 15.02 0 1.03.11 2.04.328 3.02 1.34 5.92 6.13 10.15 12.01 10.15 1.54 0 3.05-.28 4.49-.83.82-.31 1.6-.71 2.33-1.18.23-.15.45-.31.66-.48z"
          fill="#000"
        />
        <path
          d="M36.96 34.562c-5.83-2.31-10.9-8.49-10.9-15.65 0-1.5.25-2.96.72-4.36-4.54-2.12-9.74-2.47-14.56.09-8.24 4.4-13.52 13.06-13.52 22.56 0 12.57 9.98 22.37 22.95 22.37 6.4 0 12.3-2.58 16.5-6.97 4.32-4.52 6.83-10.45 7.15-16.64h-9.34z"
          fill="#000"
        />
      </svg>
    ),
  },
  {
    name: 'Google Pay',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="black"
      >
        <path d="M20.3,9.5H18V8.1c0-1-0.8-1.8-1.8-1.8h-4c-1.4,0-2.6,0.8-3.2,2h-1c-1,0-1.8,0.8-1.8,1.8v1.4h1c0.5,0,0.9,0.4,0.9,0.9 v4.3c0,0.5-0.4,0.9-0.9,0.9h-1v1.4c0,1,0.8,1.8,1.8,1.8h9.8c1,0,1.8-0.8,1.8-1.8V10.4C21.2,9.9,20.8,9.5,20.3,9.5z M13.1,12.7 c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5v-2.3c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5V12.7z" />
        <path d="M11.5,8.8c-1.4,0-2.6,1.2-2.6,2.6v2.3c0,1.4,1.2,2.6,2.6,2.6s2.6-1.2,2.6-2.6v-2.3C14.1,10,12.9,8.8,11.5,8.8z M11.5,14.2c-0.8,0-1.5-0.7-1.5-1.5v-2.3c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v2.3C13.1,13.5,12.3,14.2,11.5,14.2z" />
      </svg>
    ),
  },
];

export function PaymentMethods() {
  return (
    <div className="mt-8 w-full max-w-lg">
      <p className="text-center text-sm font-medium text-muted-foreground">
        Formas de Pagamento Seguras
      </p>
      <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className={cn(
                "flex flex-col items-center justify-center rounded-lg border bg-card p-3 text-muted-foreground transition-all duration-300 ease-in-out hover:shadow-md hover:border-border/60 hover:-translate-y-1"
            )}
            title={method.name}
          >
            <div className="flex h-10 w-10 items-center justify-center">
                {method.icon}
            </div>
            <span className="mt-2 text-[11px] font-semibold text-center text-foreground/80">
              {method.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
