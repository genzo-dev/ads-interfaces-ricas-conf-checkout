import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-ticket-item',
  standalone: true,
  templateUrl: './ticket-item.html',
})
export class TicketItemComponent {

  eventName = input.required<string>();

  quantity = model<number>(1);

  cancelRequest = output<void>();

  increase() {
    this.quantity.update(q => q + 1);
  }

  decrease() {
    this.quantity.update(q => (q > 1 ? q - 1 : 1));
  }

  requestCancel() {
    this.cancelRequest.emit();
  }

  applyCoupon(event: Event) {
    let value = '';

    if (event.currentTarget instanceof HTMLInputElement) {
      value = event.currentTarget.value;
    } else {
      const input = document.querySelector('input');
      value = (input as HTMLInputElement)?.value ?? '';
    }

    alert(`Buscando cupom: ${value}`);
  }
}