"use client";

import { useEffect, useState } from 'react';

export function AppFooter() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-12 border-t py-8 text-center text-sm text-muted-foreground">
      <div className="container">
        © {year}{' '}
        <strong className="font-semibold text-foreground/90">
          Bobbie Goods
        </strong>{' '}
        • Cozy Coloring • Todos os direitos reservados.
      </div>
    </footer>
  );
}
