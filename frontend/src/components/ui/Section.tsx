import { Container } from './Container';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      {(title || subtitle) && (
        <Container>
          <div className="mb-12 text-center lg:mb-16">
            {title && <h2 className="section-title font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-primary/70 sm:text-lg">{subtitle}</p>}
          </div>
        </Container>
      )}
      {children}
    </section>
  );
}
