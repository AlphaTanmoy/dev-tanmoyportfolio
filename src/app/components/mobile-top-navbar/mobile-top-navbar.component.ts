import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-top-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm md:hidden"
         style="padding: 12px 0;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 16px;">
        <div style="display: flex; justify-content: center; align-items: center;">
          <!-- Logo/Brand -->
          <div style="flex-shrink: 0;">
            <a href="#hero" style="font-size: 20px; font-weight: bold; color: #1f2937; text-decoration: none;">
              Tanmoy Das
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [``]
})
export class MobileTopNavbarComponent {}
