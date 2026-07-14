import { Container } from './Container';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      {(title || subtitle) && (
        <Container>
          <div className="text-center mb-12">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        </Container>
      )}
      {children}
    </section>
  );
}
