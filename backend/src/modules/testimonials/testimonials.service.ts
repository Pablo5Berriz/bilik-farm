import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TestimonialsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.testimonial.findMany({ where: { approved: true }, orderBy: { createdAt: 'desc' } });
  }

  create(data: { author: string; role?: string; content: string; rating?: number }) {
    return this.prisma.testimonial.create({ data });
  }

  async approve(id: string) {
    const t = await this.prisma.testimonial.findUnique({ where: { id } });
    if (!t) throw new NotFoundException('Testimonial not found');
    return this.prisma.testimonial.update({ where: { id }, data: { approved: true } });
  }

  async remove(id: string) {
    const t = await this.prisma.testimonial.findUnique({ where: { id } });
    if (!t) throw new NotFoundException('Testimonial not found');
    return this.prisma.testimonial.delete({ where: { id } });
  }
}
