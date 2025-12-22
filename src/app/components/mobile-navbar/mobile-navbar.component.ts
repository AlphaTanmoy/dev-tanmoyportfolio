import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden"
         style="padding: 8px 0;">
      <div style="display: flex; justify-content: space-around; align-items: center;">
        <a href="#about" (click)="setActiveSection('about')"
           style="display: flex; flex-direction: column; align-items: center; padding: 8px; text-decoration: none; transition: all 0.3s ease;"
           [style.color]="activeSection === 'about' ? '#2563eb' : '#4b5563'">
          <svg style="width: 20px; height: 20px; margin-bottom: 4px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <span style="font-size: 12px; font-weight: 500;">About</span>
        </a>
        
        <a href="#skills" (click)="setActiveSection('skills')"
           style="display: flex; flex-direction: column; align-items: center; padding: 8px; text-decoration: none; transition: all 0.3s ease;"
           [style.color]="activeSection === 'skills' ? '#2563eb' : '#4b5563'">
          <svg style="width: 20px; height: 20px; margin-bottom: 4px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
          <span style="font-size: 12px; font-weight: 500;">Skills</span>
        </a>
        
        <a href="#experience" (click)="setActiveSection('experience')"
           style="display: flex; flex-direction: column; align-items: center; padding: 8px; text-decoration: none; transition: all 0.3s ease;"
           [style.color]="activeSection === 'experience' ? '#2563eb' : '#4b5563'">
          <svg style="width: 20px; height: 20px; margin-bottom: 4px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span style="font-size: 12px; font-weight: 500;">Exp</span>
        </a>
        
        <a href="#projects" (click)="setActiveSection('projects')"
           style="display: flex; flex-direction: column; align-items: center; padding: 8px; text-decoration: none; transition: all 0.3s ease;"
           [style.color]="activeSection === 'projects' ? '#2563eb' : '#4b5563'">
          <svg style="width: 20px; height: 20px; margin-bottom: 4px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <span style="font-size: 12px; font-weight: 500;">Projects</span>
        </a>
        
        <a href="#contact" (click)="setActiveSection('contact')"
           style="display: flex; flex-direction: column; align-items: center; padding: 8px; text-decoration: none; transition: all 0.3s ease;"
           [style.color]="activeSection === 'contact' ? '#2563eb' : '#4b5563'">
          <svg style="width: 20px; height: 20px; margin-bottom: 4px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span style="font-size: 12px; font-weight: 500;">Contact</span>
        </a>
      </div>
    </nav>
  `,
  styles: [``]
})
export class MobileNavbarComponent implements OnInit, OnDestroy {
  activeSection = 'hero';
  private scrollListener?: () => void;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollListener = () => this.onScroll();
      window.addEventListener('scroll', this.scrollListener);
      
      // Initialize active section on page load
      setTimeout(() => {
        this.updateActiveSection();
      }, 100);
      
      // Check URL hash for initial section
      this.checkHashSection();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  checkHashSection() {
    if (isPlatformBrowser(this.platformId)) {
      const hash = window.location.hash.substring(1);
      if (hash && ['hero', 'skills', 'about', 'experience', 'education', 'achievements', 'projects', 'contact'].includes(hash)) {
        this.activeSection = hash;
      }
    }
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateActiveSection();
    }
  }

  updateActiveSection() {
    if (isPlatformBrowser(this.platformId)) {
      const sections = ['hero', 'skills', 'about', 'experience', 'education', 'achievements', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      const windowHeight = window.innerHeight;
      
      let currentSection = 'hero';
      let maxVisibility = 0;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + element.offsetHeight;
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(scrollPosition, elementTop);
          const visibleBottom = Math.min(scrollPosition + windowHeight, elementBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityPercentage = visibleHeight / element.offsetHeight;
          
          // Update current section if this one has more visibility
          if (visibilityPercentage > maxVisibility) {
            maxVisibility = visibilityPercentage;
            currentSection = section;
          }
        }
      }
      
      this.activeSection = currentSection;
    }
  }
}
