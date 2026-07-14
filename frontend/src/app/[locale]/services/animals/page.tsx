import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AnimalsPage() {
  return (
    <Section title="Élevage Avicole" subtitle="Production de volailles de qualité supérieure">
      <Container>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Notre élevage avicole propose des poulets de chair, poules pondeuses et autres volailles
            élevés dans des conditions optimales pour garantir la meilleure qualité.
          </p>
        </div>
      </Container>
    </Section>
  );
}
