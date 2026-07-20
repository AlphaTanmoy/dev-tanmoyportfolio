import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Hero } from '../../features/hero/hero';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    Footer
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
