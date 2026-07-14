import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() body: { name: string; email: string; phone?: string; subject: string; message: string }) {
    return this.contactService.create(body);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.contactService.findAll();
  }

  @Put(':id/read')
  @UseGuards(AuthGuard('jwt'))
  markRead(@Param('id') id: string) {
    return this.contactService.markRead(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
