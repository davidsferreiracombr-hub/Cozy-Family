"use client";

import { useEffect, useState } from 'react';

export function AppFooter() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container flex h-20 items-center justify-center py-8 text-center text-sm text-muted-foreground">
        © {year}{' '}
        <strong className="font-semibold text-foreground/90 mx-1">
          Bobbie Goods
        </strong>{' '}
        • Cozy Coloring • Todos os direitos reservados.
      </div>
    </footer>
  );
}
