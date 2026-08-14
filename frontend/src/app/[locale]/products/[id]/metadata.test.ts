import { describe, it, expect } from 'vitest';
import { generateMetadata } from './page';
import { products } from '@/data/products';

describe('Product metadata', () => {
  // META-001: each product page's metadata is derived from that product's own data,
  // not a shared generic title/description.
  it('generates a distinct title and description per product', async () => {
    const seen = new Set<string>();

    for (const product of products) {
      const metadata = await generateMetadata({ params: Promise.resolve({ id: product.slug }) });

      expect(metadata.title).toBe(`${product.title} | Bilik Farm`);
      expect(metadata.description).toContain(product.description);
      expect(metadata.description).toContain(product.category);
      expect(metadata.description).toContain(product.status);

      expect(seen.has(String(metadata.title))).toBe(false);
      seen.add(String(metadata.title));
    }

    expect(seen.size).toBe(products.length);
  });

  it('falls back to a neutral title for an unknown slug', async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ id: 'ne-existe-pas' }) });
    expect(metadata.title).toBe('Fiche introuvable — Bilik Farm');
  });
});
