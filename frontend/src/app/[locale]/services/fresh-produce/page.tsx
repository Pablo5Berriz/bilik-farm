import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function FreshProducePage() {
  return (
    <Section title="Cultures ciblées" subtitle="Productions vivrières et maraîchères en développement">
      <Container>
        <p className="text-lg text-gray-600">
          Cette activité fait partie des axes de développement de Bilik Farm. Les cultures seront
          présentées comme productions en développement, sans disponibilité commerciale publiée tant
          qu&apos;elle n&apos;est pas confirmée.
        </p>
      </Container>
    </Section>
  );
}
