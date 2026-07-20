import {
  AfterViewInit,
  Component,
  OnDestroy
} from '@angular/core';

import Typed from 'typed.js';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements AfterViewInit, OnDestroy {

  private typed?: Typed;

  ngAfterViewInit(): void {

    this.typed = new Typed('#typed-role', {

      strings: [
        'Backend Engineer',
        'Java Developer',
        'Spring Boot Developer',
        'Kotlin Developer',
        'Microservice Developer'
      ],

      typeSpeed: 60,

      backSpeed: 35,

      backDelay: 1800,

      loop: true

    });

  }

  ngOnDestroy(): void {
    this.typed?.destroy();
  }

}