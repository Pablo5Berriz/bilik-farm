import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AnimalsPage() {
  return (
    <Section title="Élevage en développement" subtitle="Axe progressif du projet Bilik Farm">
      <Container>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Cette activité fait partie des développements prévus de Bilik Farm et n'est pas encore
            proposée comme service commercial. Les filières d'élevage seront présentées progressivement,
            sans disponibilité ni effectif publiés tant qu'ils ne sont pas confirmés.
          </p>
        </div>
      </Container>
    </Section>
  );
}
