import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
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
