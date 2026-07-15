import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function BlogPage() {
  return (
    <Section title="Actualités à venir" subtitle="Section éditoriale en préparation">
      <Container>
        <p className="text-center text-gray-500 py-12">
          Cette section sera publiée lorsque les premiers contenus officiels de Bilik Farm auront été validés.
        </p>
      </Container>
    </Section>
  );
}
