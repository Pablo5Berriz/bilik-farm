import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from './ContactForm';

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/^Nom/), 'Jane Doe');
  await user.type(screen.getByLabelText(/^Email/), 'jane@example.com');
  await user.type(screen.getByLabelText(/^Sujet/), 'Question produit');
  await user.type(screen.getByLabelText(/^Message/), 'Bonjour, ceci est un message de test.');
}

describe('ContactForm', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  // CONTACT-001: an empty/invalid form is rejected without calling the network.
  it('refuses submission and shows field errors when required fields are empty', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole('button', { name: /Envoyer le message/i }));

    expect(await screen.findByText('Le nom est obligatoire.')).toBeInTheDocument();
    expect(screen.getByText("L'email est obligatoire.")).toBeInTheDocument();
    expect(screen.getByText('Le sujet est obligatoire.')).toBeInTheDocument();
    expect(screen.getByText('Le message est obligatoire.')).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  // CONTACT-002: a valid submission shows the loading state while the request is in flight.
  it('shows a loading state and disables the submit button while submitting', async () => {
    let resolveFetch: (value: Response) => void = () => {};
    (fetch as unknown as ReturnType<typeof vi.fn>).mockReturnValue(
      new Promise((resolve) => {
        resolveFetch = resolve;
      }),
    );

    const user = userEvent.setup();
    render(<ContactForm />);
    await fillValidForm(user);

    await user.click(screen.getByRole('button', { name: /Envoyer le message/i }));

    const submitButton = await screen.findByRole('button', { name: /Envoi en cours/i });
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveAttribute('aria-busy', 'true');

    resolveFetch(new Response(null, { status: 200 }));
    await waitFor(() => expect(screen.getByRole('button')).not.toBeDisabled());
  });

  // CONTACT-003: a successful FormSubmit response shows the confirmation message.
  it('shows a success confirmation after a successful response', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue(new Response(null, { status: 200 }));

    const user = userEvent.setup();
    render(<ContactForm />);
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /Envoyer le message/i }));

    expect(await screen.findByText(/Message envoyé/i)).toBeInTheDocument();
  });

  // CONTACT-004: a network/service failure shows an explicit error message with a fallback.
  it('shows an error message with a fallback contact when the request fails', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('network down'));

    const user = userEvent.setup();
    render(<ContactForm />);
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /Envoyer le message/i }));

    expect(await screen.findByText(/L'envoi a échoué/i)).toBeInTheDocument();
    expect(screen.getByText(/Bilik-farm@gmail.com/i)).toBeInTheDocument();
  });

  // CONTACT-005: clicking submit repeatedly while a request is in flight only sends one request.
  it('prevents a double submission from sending two requests', async () => {
    let resolveFetch: (value: Response) => void = () => {};
    (fetch as unknown as ReturnType<typeof vi.fn>).mockReturnValue(
      new Promise((resolve) => {
        resolveFetch = resolve;
      }),
    );

    const user = userEvent.setup();
    render(<ContactForm />);
    await fillValidForm(user);

    const submitButton = screen.getByRole('button', { name: /Envoyer le message/i });
    await user.click(submitButton);
    await user.click(submitButton);
    await user.click(submitButton);

    expect(fetch).toHaveBeenCalledTimes(1);
    resolveFetch(new Response(null, { status: 200 }));
  });
});
