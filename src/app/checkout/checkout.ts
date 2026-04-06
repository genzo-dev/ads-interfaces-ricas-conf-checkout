import { Component, signal } from '@angular/core';
import { TicketItemComponent } from '../ticket-item/ticket-item';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [TicketItemComponent],
  templateUrl: './checkout.html',
})
export class CheckoutComponent {

  qtd = signal(1);
  mensagemStatus = signal('Aguardando finalização...');

  onCancel() {
    this.mensagemStatus.set('O usuário solicitou o cancelamento da compra!');
  }
}