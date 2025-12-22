import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg hidden md:block"
         style="padding: 0 0;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; height: 64px;">
          <!-- Logo/Brand -->
          <div style="flex-shrink: 0;">
            <a href="#hero" style="font-size: 24px; font-weight: bold; color: #1f2937; text-decoration: none;">
              Tanmoy Das
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div style="display: flex; space-x: 8px;">
            <a href="#about" (click)="setActiveSection('about')"
               style="padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.3s ease;"
               [style.color]="activeSection === 'about' ? '#2563eb' : '#4b5563'">
              About
            </a>
            <a href="#skills" (click)="setActiveSection('skills')"
               style="padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.3s ease;"
               [style.color]="activeSection === 'skills' ? '#2563eb' : '#4b5563'">
              Skills
            </a>
            <a href="#experience" (click)="setActiveSection('experience')"
               style="padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.3s ease;"
               [style.color]="activeSection === 'experience' ? '#2563eb' : '#4b5563'">
              Experience
            </a>
            <a href="#education" (click)="setActiveSection('education')"
               style="padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.3s ease;"
               [style.color]="activeSection === 'education' ? '#2563eb' : '#4b5563'">
              Education
            </a>
            <a href="#achievements" (click)="setActiveSection('achievements')"
               style="padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.3s ease;"
               [style.color]="activeSection === 'achievements' ? '#2563eb' : '#4b5563'">
              Achievements
            </a>
            <a href="#projects" (click)="setActiveSection('projects')"
               style="padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.3s ease;"
               [style.color]="activeSection === 'projects' ? '#2563eb' : '#4b5563'">
              Projects
            </a>
            <a href="#contact" (click)="setActiveSection('contact')"
               style="padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.3s ease;"
               [style.color]="activeSection === 'contact' ? '#2563eb' : '#4b5563'">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [``]
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrolled = false;
  mobileMenuOpen = false;
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
      this.scrolled = window.scrollY > 50;
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

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
