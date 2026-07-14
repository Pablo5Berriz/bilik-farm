import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, items: { productId: string; quantity: number }[]) {
    const products = await Promise.all(
      items.map((item) => this.prisma.product.findUnique({ where: { id: item.productId } }))
    );
    const total = items.reduce((sum, item, i) => sum + (products[i]?.price ?? 0) * item.quantity, 0);

    return this.prisma.order.create({
      data: {
        userId,
        total,
        items: {
          create: items.map((item, i) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: products[i]?.price ?? 0,
          })),
        },
      },
      include: { items: { include: { product: true } } },
    });
  }

  findAllByUser(userId: string) {
    return this.prisma.order.findMany({ where: { userId }, include: { items: { include: { product: true } } }, orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string) {
    const order = await this.prisma.order.findUnique({ where: { id }, include: { items: { include: { product: true } }, user: { select: { name: true, email: true } } } });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async updateStatus(id: string, status: OrderStatus) {
    await this.findOne(id);
    return this.prisma.order.update({ where: { id }, data: { status } });
  }
}
