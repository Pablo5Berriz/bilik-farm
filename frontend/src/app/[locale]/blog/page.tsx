import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';

async function getPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const posts = await getPosts();

  return (
    <Section title="Blog" subtitle="Actualités et conseils agricoles">
      <Container>
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 py-12">Aucun article disponible pour le moment.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <article key={post.id} className="card p-6">
                <h2 className="text-xl font-bold text-green-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/${params.locale}/blog/${post.slug}`} className="text-green-700 font-semibold hover:underline">
                  Lire la suite &rarr;
                </Link>
              </article>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
