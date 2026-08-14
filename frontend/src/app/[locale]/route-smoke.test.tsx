import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './page';
import ProductsPage from './products/page';
import ContactPage from './contact/page';

const params = Promise.resolve({ locale: 'fr' });

describe('Route smoke tests', () => {
  // ROUTE-001: the homepage renders without throwing and shows its main heading.
  it('renders the homepage', async () => {
    const element = await HomePage({ params });
    render(element);
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBeGreaterThan(0);
  });

  // ROUTE-002: the products catalogue renders and links to all 15 known products.
  it('renders the products catalogue', async () => {
    const element = await ProductsPage({ params });
    render(element);
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBeGreaterThan(0);
    const productLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href')?.startsWith('/fr/products/'));
    expect(productLinks).toHaveLength(15);
  });

  // ROUTE-003: the contact page renders with its form and published email.
  it('renders the contact page with the contact form', async () => {
    const element = await ContactPage({ params });
    render(element);
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: /Envoyer le message/i })).toBeInTheDocument();
    expect(screen.getByText('Bilik-farm@gmail.com')).toBeInTheDocument();
  });
});
