'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const CONTACT_EMAIL = 'Bilik-farm@gmail.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactFormProps {
  locale?: string;
}

export function ContactForm({ locale = 'fr' }: ContactFormProps) {
  const [state, setState] = useState<SubmitState>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(formData: FormData): FormErrors {
    const nextErrors: FormErrors = {};
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name) nextErrors.name = 'Le nom est obligatoire.';
    if (!email) nextErrors.email = "L'email est obligatoire.";
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = 'Le format de l’email est invalide.';
    if (!subject) nextErrors.subject = 'Le sujet est obligatoire.';
    if (!message) nextErrors.message = 'Le message est obligatoire.';

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === 'submitting') return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (String(formData.get('_honey') ?? '')) {
      return;
    }

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setState('error');
      return;
    }

    setState('submitting');

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) throw new Error(`FormSubmit a répondu avec le statut ${response.status}`);

      setState('success');
      form.reset();
    } catch {
      setState('error');
    }
  }

  const fieldClassName =
    'min-h-12 w-full rounded-xl border border-primary/15 bg-ivory px-4 py-3 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:cursor-not-allowed disabled:opacity-60';

  return (
    <form className="space-y-6" aria-describedby="contact-form-status" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="_subject" value="Nouveau message — site Bilik Farm" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div id="contact-form-status" role="status" aria-live="polite" className="rounded-editorial border border-gold/40 bg-gold/10 p-5 text-sm leading-6 text-primary">
        {state === 'success' && 'Message envoyé. Merci, nous reviendrons vers vous par email dès que possible.'}
        {state === 'error' && Object.keys(errors).length === 0 && "L'envoi a échoué. Réessayez, ou écrivez directement à Bilik-farm@gmail.com."}
        {state === 'error' && Object.keys(errors).length > 0 && 'Certains champs doivent être corrigés avant l’envoi.'}
        {(state === 'idle' || state === 'submitting') &&
          'Ce formulaire transmet votre message par email à Bilik Farm. Vous pouvez aussi écrire directement à Bilik-farm@gmail.com.'}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-primary">Nom *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            disabled={state === 'submitting'}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={fieldClassName}
          />
          {errors.name && <p id="contact-name-error" role="alert" className="mt-2 text-sm text-terracotta">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-primary">Email *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            disabled={state === 'submitting'}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={fieldClassName}
          />
          {errors.email && <p id="contact-email-error" role="alert" className="mt-2 text-sm text-terracotta">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-primary">Téléphone</label>
        <input id="contact-phone" name="phone" type="tel" disabled={state === 'submitting'} className={fieldClassName} />
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-primary">Sujet *</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          disabled={state === 'submitting'}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          className={fieldClassName}
        />
        {errors.subject && <p id="contact-subject-error" role="alert" className="mt-2 text-sm text-terracotta">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-primary">Message *</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          disabled={state === 'submitting'}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${fieldClassName} resize-none`}
        />
        {errors.message && <p id="contact-message-error" role="alert" className="mt-2 text-sm text-terracotta">{errors.message}</p>}
      </div>

      <p className="text-xs leading-5 text-primary/70">
        Les informations saisies servent uniquement à répondre à votre message et sont transmises au service tiers FormSubmit pour l’acheminer par email.{' '}
        <Link href={`/${locale}/confidentialite`} className="underline underline-offset-2 hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
          En savoir plus sur ces données
        </Link>
        .
      </p>

      <Button type="submit" disabled={state === 'submitting'} aria-busy={state === 'submitting'} className="w-full">
        {state === 'submitting' ? 'Envoi en cours…' : 'Envoyer le message'}
      </Button>
    </form>
  );
}
