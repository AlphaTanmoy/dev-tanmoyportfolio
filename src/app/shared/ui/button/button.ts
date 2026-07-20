import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {

  label = input.required<string>();

  variant = input<'primary' | 'secondary'>('primary');

  type = input<'button' | 'submit'>('button');

  disabled = input(false);

}