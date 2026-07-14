import { Container } from '@/components/ui/Container';
import { notFound } from 'next/navigation';

async function getPost(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <Container className="py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-green-900 mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  );
}
