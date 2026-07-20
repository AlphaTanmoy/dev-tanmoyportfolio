import { Component } from '@angular/core';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

}