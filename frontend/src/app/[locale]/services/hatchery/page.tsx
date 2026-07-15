import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function HatcheryPage() {
  return (
    <Section title="Écloserie prévue" subtitle="Développement futur du projet">
      <Container>
        <p className="text-lg text-gray-600">
          Cette activité fait partie des développements prévus de Bilik Farm et n&apos;est pas encore
          proposée comme service commercial. Aucune capacité, disponibilité ou performance n&apos;est publiée
          à ce stade.
        </p>
      </Container>
    </Section>
  );
}
