import { Button } from '@/components/ui/Button';

export function ContactForm() {
  return (
    <form className="space-y-6" aria-describedby="contact-form-status">
      <div id="contact-form-status" role="status" className="rounded-editorial border border-gold/40 bg-gold/10 p-5 text-sm leading-6 text-primary">
        Le formulaire en ligne est temporairement indisponible. Les coordonnées officielles seront publiées après validation.
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-primary">Nom *</label>
          <input id="contact-name" type="text" disabled
            className="min-h-12 w-full rounded-xl border border-primary/15 bg-ivory px-4 py-3 text-primary disabled:cursor-not-allowed disabled:opacity-60" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-primary">Email *</label>
          <input id="contact-email" type="email" disabled
            className="min-h-12 w-full rounded-xl border border-primary/15 bg-ivory px-4 py-3 text-primary disabled:cursor-not-allowed disabled:opacity-60" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-primary">Téléphone</label>
        <input id="contact-phone" type="tel" disabled
          className="min-h-12 w-full rounded-xl border border-primary/15 bg-ivory px-4 py-3 text-primary disabled:cursor-not-allowed disabled:opacity-60" />
      </div>
      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-primary">Sujet *</label>
        <input id="contact-subject" type="text" disabled
          className="min-h-12 w-full rounded-xl border border-primary/15 bg-ivory px-4 py-3 text-primary disabled:cursor-not-allowed disabled:opacity-60" />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-primary">Message *</label>
        <textarea id="contact-message" rows={6} disabled
          className="w-full resize-none rounded-xl border border-primary/15 bg-ivory px-4 py-3 text-primary disabled:cursor-not-allowed disabled:opacity-60" />
      </div>
      <Button type="button" disabled aria-disabled="true" className="w-full">
        Envoi temporairement indisponible
      </Button>
    </form>
  );
}
