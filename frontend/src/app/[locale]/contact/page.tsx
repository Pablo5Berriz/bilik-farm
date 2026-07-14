import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <Section title="Nous contacter" subtitle="Notre équipe est à votre écoute">
      <Container>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
