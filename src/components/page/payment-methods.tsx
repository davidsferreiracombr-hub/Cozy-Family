"use client";

export function PaymentMethods() {
  return (
    <div className="mt-8 w-full max-w-2xl text-center">
      <p className="text-sm font-medium text-muted-foreground">
        Aceitamos as principais formas de pagamento, incluindo{" "}
        <strong className="text-foreground/90">Pix, Cartão de Crédito e Boleto</strong>.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        O Pix é o método mais utilizado para acesso instantâneo. O pagamento final é realizado de forma segura na página de checkout.
      </p>
    </div>
  );
}
