"use client";

import { cn } from '@/lib/utils';

const paymentMethods = [
  {
    name: 'PIX',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-white"
      >
        <path d="M12.21,6.34,8.5,9.63l-.11.1a2.33,2.33,0,0,0,0,3.3l.11.1,3.71,3.29a2.33,2.33,0,0,0,3.3,0l3.71-3.29.11-.1a2.33,2.33,0,0,0,0-3.3l-.11-.1-3.71-3.29A2.33,2.33,0,0,0,12.21,6.34Z" stroke="white" strokeWidth="1.5" />
        <path d="M11.79,17.66,8.5,14.37l-.11-.1a2.33,2.33,0,0,1,0-3.3l.11-.1,3.29-3.71a2.33,2.33,0,0,1,3.3,0l3.29,3.71.11.1a2.33,2.33,0,0,1,0,3.3l-.11.1-3.29,3.71A2.33,2.33,0,0,1,11.79,17.66Z" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    isPrimary: true,
  },
  {
    name: 'Boleto',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16M6 4v16M10 4v16M14 4v16M18 4v16" />
        </svg>
    ),
  },
  {
    name: 'Cartão de Crédito',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
        </svg>
    ),
  },
  {
    name: 'PicPay',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" viewBox="0 0 256 256" fill="currentColor">
            <path d="M141.2,56.29a35.11,35.11,0,0,0-50.4,0,8,8,0,0,0,11.31,11.31,19.12,19.12,0,0,1,27.78,0,8,8,0,0,0,11.31-11.31Zm-82.68,137a8,8,0,0,0,8,8h90.8L93.1,137a8,8,0,0,0-14.58,7.95l38.83,59.34H65.33a24,24,0,0,1-24-24v-104A24,24,0,0,1,65.33,52.29H184a24,24,0,0,1,24,24v50.54a8,8,0,0,0,16,0V76.29a40,40,0,0,0-40-40H65.33a40,40,0,0,0-40,40v104a40,40,0,0,0,40,40h61.85a8,8,0,0,0,7.21-4.43,8,8,0,0,0-1.8-8.86Zm138.81-42.59a8,8,0,0,0-8.86,1.81L163.2,191.8V166.33a8,8,0,0,0-16,0v34.54a8,8,0,0,0,4.42,7.21,8,8,0,0,0,8.87-1.81L185.6,181.7V206.2a8,8,0,0,0,16,0V171.67a8,8,0,0,0-4.42-7.21A8,8,0,0,0,197.33,166.29Zm26.69-21.36h-8v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Z"/>
        </svg>
    ),
  },
  {
    name: 'Apple Pay',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.1,6.54c-2.43,0-4.4,1.97-4.4,4.4s1.97,4.4,4.4,4.4s4.4-1.97,4.4-4.4S12.53,6.54,10.1,6.54z M10.1,13.54 c-1.5,0-2.7-1.2-2.7-2.7s1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7S11.6,13.54,10.1,13.54z M20,10.94v2.2h-1.83 c-0.28,2.8-2.63,5.03-5.46,5.19v1.83h-2.2v-1.83c-2.8-0.28-5.03-2.63-5.19-5.46H3.5v-2.2h1.83c0.28-2.8,2.63-5.03,5.46-5.19 V3.54h2.2v1.83c2.8,0.28,5.03,2.63,5.19,5.46H20z M14.3,10.94c-0.22-2.25-2.1-4-4.39-4s-4,1.75-4.21,4H14.3z"/>
        </svg>
    ),
  },
];

export function PaymentMethods() {
  return (
    <div className="mt-8 w-full max-w-2xl">
      <p className="text-center text-sm font-medium text-muted-foreground">
        Formas de Pagamento Seguras
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className={cn(
                "flex h-32 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:border-gray-300 hover:-translate-y-1",
                method.isPrimary && 'bg-primary text-white hover:bg-primary/90'
            )}
            title={method.name}
          >
            <div className={cn("flex h-12 w-12 items-center justify-center", method.isPrimary && 'text-white')}>
                {method.icon}
            </div>
            <span className={cn("mt-2 text-base font-semibold text-center text-foreground/80", method.isPrimary && 'text-white')}>
              {method.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
