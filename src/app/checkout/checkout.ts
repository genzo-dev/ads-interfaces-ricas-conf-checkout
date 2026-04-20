import { Component, signal, computed } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ResumoPipe } from '../pipes/resumo.pipe';
import { Card } from '../card/card';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [Card, CurrencyPipe, DatePipe, ResumoPipe],
  templateUrl: './checkout.html',
})
export class CheckoutComponent {

  catalogo = signal([
    {
      id: 1,
      nome: 'Angular Conf 2026',
      tipo: 'VIP',
      data: new Date(),
      preco: 150,
      quantidade: 1,
      descricao: 'Acesso completo ao evento, incluindo workshops exclusivos e networking premium com especialistas.'
    },
    {
      id: 2,
      nome: 'Angular Conf 2026',
      tipo: 'STANDARD',
      data: new Date(),
      preco: 100,
      quantidade: 1,
      descricao: 'Acesso às palestras principais e área comum do evento.'
    },
    {
      id: 3,
      nome: 'Angular Conf 2026',
      tipo: 'MEIA',
      data: new Date(),
      preco: 50,
      quantidade: 1,
      descricao: 'Ingresso com desconto para estudantes mediante comprovação.'
    }
  ]);

  carrinho = signal<any[]>([]);

    adicionar(ticket: any) {
    this.carrinho.update(items => {
      const existente = items.find(t => t.id === ticket.id);

      if (existente) {
        return items.map(t =>
          t.id === ticket.id
            ? { ...t, quantidade: t.quantidade + 1 }
            : t
        );
      }

      return [...items, { ...ticket, quantidade: 1 }];
    });
  }

  totalQuantidade = computed(() =>
    this.carrinho().reduce((acc, t) => acc + t.quantidade, 0)
  );
}