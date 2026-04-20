import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumo',
  standalone: true,
})
export class ResumoPipe implements PipeTransform {
  transform(text: string, limit: number = 20): string {
    if (!text) return '';

    if (text.length <= limit) {
      return text;
    }

    return text.slice(0, limit) + '...';
  }
}