const testimonials = [
  {
    quote:
      'Simplesmente adorei — desenhos delicados e super relaxantes. Usei com meus sobrinhos e aproveitamos muito.',
    author: 'Marina, SP',
  },
  {
    quote:
      'Comprei para mim e também para presentear minha mãe. Qualidade excelente e super prazeroso de colorir.',
    author: 'Rafael, RJ',
  },
  {
    quote:
      'Design fofo e temas acolhedores. Recomendo para quem quer relaxar depois do trabalho.',
    author: 'Camila, BH',
  },
];

export function Testimonials() {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold tracking-tight">Comentários</h2>
      <div className="mt-4 flex flex-col gap-3" aria-live="polite">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className="rounded-md bg-secondary p-4 text-left text-sm"
          >
            <p className="italic text-secondary-foreground/80">
              "{testimonial.quote}"
            </p>
            <footer className="mt-2 text-sm font-bold text-secondary-foreground">
              — {testimonial.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
