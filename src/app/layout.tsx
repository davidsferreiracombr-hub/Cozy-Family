import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cozy Coloring — Bobbie Goods',
  description:
    'Ilustrações fofas e aconchegantes para colorir e relaxar — perfeitas para todas as idades.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'font-body antialiased',
          "bg-[linear-gradient(180deg,_hsl(var(--background)),_#fff)]"
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
