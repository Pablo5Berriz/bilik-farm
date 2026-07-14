import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AdvisoryPage() {
  return (
    <Section title="Conseil Agricole" subtitle="Expertise et accompagnement technique">
      <Container>
        <p className="text-lg text-gray-600">
          Notre équipe d'experts vous accompagne dans vos projets d'élevage et de production
          agricole avec des conseils techniques personnalisés.
        </p>
      </Container>
    </Section>
  );
}
