import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function HatcheryPage() {
  return (
    <Section title="Couvoir" subtitle="Production de poussins d'un jour">
      <Container>
        <p className="text-lg text-gray-600">
          Notre couvoir moderne produit des poussins d'un jour de haute qualité génétique,
          vaccinés et prêts pour l'élevage.
        </p>
      </Container>
    </Section>
  );
}
