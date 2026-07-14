import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function FreshProducePage() {
  return (
    <Section title="Produits Frais" subtitle="Légumes et fruits frais de saison">
      <Container>
        <p className="text-lg text-gray-600">
          Nos produits frais sont cultivés localement et récoltés à maturité pour vous offrir
          les meilleures saveurs et une qualité nutritionnelle optimale.
        </p>
      </Container>
    </Section>
  );
}
