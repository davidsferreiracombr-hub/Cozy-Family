export function AppFooter() {
  return (
    <footer className="mt-12 border-t py-8 text-center text-sm text-muted-foreground">
      <div className="container">
        © {new Date().getFullYear()}{' '}
        <strong className="font-semibold text-foreground/90">
          Bobbie Goods
        </strong>{' '}
        • Cozy Coloring • Todos os direitos reservados.
      </div>
    </footer>
  );
}
