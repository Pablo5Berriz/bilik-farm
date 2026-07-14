import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform<string> {
  transform(value: string): string {
    if (!value || value.trim() === '') {
      throw new BadRequestException('Invalid ID');
    }
    return value;
  }
}
