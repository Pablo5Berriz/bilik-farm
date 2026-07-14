import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Get()
  findAll() {
    return this.testimonialsService.findAll();
  }

  @Post()
  create(@Body() body: { author: string; role?: string; content: string; rating?: number }) {
    return this.testimonialsService.create(body);
  }

  @Put(':id/approve')
  @UseGuards(AuthGuard('jwt'))
  approve(@Param('id') id: string) {
    return this.testimonialsService.approve(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.testimonialsService.remove(id);
  }
}
