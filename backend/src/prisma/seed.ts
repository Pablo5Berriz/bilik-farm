import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@bilikfarm.com' },
    update: {},
    create: {
      email: 'admin@bilikfarm.com',
      password: await bcrypt.hash('admin123', 10),
      name: 'Admin',
      role: 'ADMIN',
    },
  });

  const category = await prisma.category.upsert({
    where: { slug: 'volaille' },
    update: {},
    create: {
      name: 'Volaille',
      slug: 'volaille',
      description: 'Poulets, dindes et autres volailles',
    },
  });

  await prisma.product.upsert({
    where: { slug: 'poulet-fermier-kg' },
    update: {},
    create: {
      name: 'Poulet fermier (kg)',
      slug: 'poulet-fermier-kg',
      description: 'Poulet élevé en plein air, nourri naturellement.',
      price: 2500,
      stock: 100,
      images: [],
      categoryId: category.id,
    },
  });

  console.log('Seed completed:', { admin, category });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
