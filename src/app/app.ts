import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CheckoutComponent],
  templateUrl: './app.html',
})
export class App {}