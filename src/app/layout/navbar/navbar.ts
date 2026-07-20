import { Component, HostListener, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  activeSection = signal('about');

  sections = [
    'about',
    'experience',
    'projects',
    'skills',
    'education',
    'contact'
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll')
  onScroll() {

    for (const section of this.sections) {

      const element = document.getElementById(section);

      if (!element) continue;

      const rect = element.getBoundingClientRect();

      if (rect.top <= 120 && rect.bottom >= 120) {
        this.activeSection.set(section);
      }
    }
  }
}