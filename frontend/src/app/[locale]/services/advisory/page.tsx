import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AdvisoryPage() {
  return (
    <Section title="Accompagnement futur" subtitle="Perspective de conseil agricole">
      <Container>
        <p className="text-lg text-gray-600">
          Cette activité fait partie des développements prévus de Bilik Farm et n&apos;est pas encore
          proposée comme service commercial. Un accompagnement pourra être structuré plus tard, avec
          des compétences et modalités confirmées.
        </p>
      </Container>
    </Section>
  );
}
