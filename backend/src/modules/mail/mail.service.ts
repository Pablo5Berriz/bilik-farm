import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  async sendContactConfirmation(to: string, name: string) {
    this.logger.log(`Sending contact confirmation to ${to}`);
    // TODO: Implement with nodemailer or @nestjs-modules/mailer
  }

  async sendOrderConfirmation(to: string, orderId: string) {
    this.logger.log(`Sending order confirmation to ${to} for order ${orderId}`);
    // TODO: Implement with nodemailer or @nestjs-modules/mailer
  }
}
