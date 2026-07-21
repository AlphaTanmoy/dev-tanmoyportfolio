import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="achievements" style="padding: 80px 0; background-color: #f9fafb;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 16px;">
        <div style="text-align: center; margin-bottom: 60px;">
          <h2 style="font-size: 48px; font-weight: bold; color: #1f2937; margin-bottom: 16px;">Achievements</h2>
          <p style="font-size: 18px; color: #6b7280; max-width: 600px; margin: 0 auto;">Recognition and milestones in my professional journey</p>
        </div>
        
        <!-- Carousel Container -->
        <div style="position: relative; width: 100%; height: 400px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
          
          <!-- Carousel Track -->
          <div style="position: relative; width: 800px; height: 100%; display: flex; justify-content: center; align-items: center;">
            
            <!-- Achievement Cards -->
            <div *ngFor="let achievement of achievements; let i = index" 
                 [style.transform]="getCardTransform(i)"
                 [style.opacity]="getCardOpacity(i)"
                 [style.zIndex]="getCardZIndex(i)"
                 [style.filter]="getCardFilter(i)"
                 style="position: absolute; transition: all 0.5s ease-in-out; cursor: pointer; left: 50%; top: 50%;"
                 (click)="goToCard(i)">
              
              <div [style.width]="getCardWidth(i)"
                   [style.height]="getCardHeight(i)"
                   [style.padding]="getCardPadding(i)"
                   [style.background]="'white'"
                   [style.borderRadius]="'16px'"
                   [style.boxShadow]="getCardShadow(i)"
                   style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                
                <div [style.width]="getIconSize(i)"
                     [style.height]="getIconSize(i)"
                     [style.background]="achievement.gradient"
                     [style.borderRadius]="'50%'"
                     [style.display]="'flex'"
                     [style.alignItems]="'center'"
                     [style.justifyContent]="'center'"
                     [style.marginBottom]="getIconMargin(i)">
                  <svg [style.width]="getSvgSize(i)" 
                       [style.height]="getSvgSize(i)" 
                       style="color: white;" 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="achievement.icon"></path>
                  </svg>
                </div>
                
                <h3 [style.fontSize]="getTitleSize(i)"
                    [style.fontWeight]="'bold'"
                    [style.color]="'#1f2937'"
                    [style.margin]="getTitleMargin(i)">
                  {{ achievement.title }}
                </h3>
                
                <p [style.fontSize]="getSubtitleSize(i)"
                   [style.color]="'#6b7280'"
                   [style.margin]="getSubtitleMargin(i)">
                  {{ achievement.subtitle }}
                </p>
                
                <p [style.fontSize]="getDescriptionSize(i)"
                   [style.color]="'#9ca3af'"
                   [style.margin]="getDescriptionMargin(i)">
                  {{ achievement.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Carousel Controls -->
        <div style="display: flex; justify-content: center; gap: 16px; margin-top: 40px;">
          <button (click)="previousCard()" 
                  (mouseenter)="onButtonHover($event, true)"
                  (mouseleave)="onButtonHover($event, false)"
                  style="background: linear-gradient(135deg, #3b82f6, #9333ea); color: white; border: none; border-radius: 50%; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease;">
            <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button (click)="nextCard()" 
                  (mouseenter)="onButtonHover($event, true)"
                  (mouseleave)="onButtonHover($event, false)"
                  style="background: linear-gradient(135deg, #3b82f6, #9333ea); color: white; border: none; border-radius: 50%; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease;">
            <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        <!-- Progress Indicators -->
        <div style="display: flex; justify-content: center; gap: 8px; margin-top: 24px;">
          <div *ngFor="let achievement of achievements; let i = index"
               [style.width]="i === currentIndex ? '32px' : '8px'"
               [style.height]="'8px'"
               [style.background]="i === currentIndex ? 'linear-gradient(135deg, #3b82f6, #9333ea)' : '#d1d5db'"
               [style.borderRadius]="'4px'"
               [style.transition]="'all 0.3s ease'">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class AchievementsComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private autoRotateInterval: any;

  constructor(private cdr: ChangeDetectorRef) {}

  achievements = [
    {
      title: 'Hackathon Winner',
      subtitle: 'National Tech Hackathon 2023',
      description: 'First place among 500+ teams',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)'
    },
    {
      title: 'Performance Award',
      subtitle: 'Employee of the Year',
      description: 'Top performer recognition',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      gradient: 'linear-gradient(135deg, #3b82f6, #9333ea)'
    },
    {
      title: 'Open Source',
      subtitle: '1000+ GitHub Stars',
      description: 'Community contributions',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4)'
    },
    {
      title: 'Certification',
      subtitle: 'AWS Solutions Architect',
      description: 'Professional certification',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      gradient: 'linear-gradient(135deg, #f59e0b, #dc2626)'
    },
    {
      title: 'Leadership',
      subtitle: 'Team Lead 2022',
      description: 'Leading development team',
      icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
    },
    {
      title: 'Innovation',
      subtitle: 'Patent Pending',
      description: 'Technical innovation',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)'
    },
    {
      title: 'Excellence',
      subtitle: 'Best Performer',
      description: 'Outstanding achievement',
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      gradient: 'linear-gradient(135deg, #84cc16, #22c55e)'
    }
  ];

  ngOnInit() {
    this.startAutoRotate();
  }

  ngOnDestroy() {
    this.stopAutoRotate();
  }

  startAutoRotate() {
    this.autoRotateInterval = setInterval(() => {
      this.nextCard();
      this.cdr.detectChanges(); // Trigger change detection
    }, 3000);
  }

  stopAutoRotate() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.achievements.length;
    this.updateOffset();
    this.cdr.detectChanges(); // Trigger change detection for immediate update
  }

  previousCard() {
    this.currentIndex = (this.currentIndex - 1 + this.achievements.length) % this.achievements.length;
    this.updateOffset();
    this.cdr.detectChanges(); // Trigger change detection for immediate update
  }

  goToCard(index: number) {
    this.currentIndex = index;
    this.updateOffset();
    this.stopAutoRotate();
    this.cdr.detectChanges(); // Trigger change detection for immediate update
    setTimeout(() => this.startAutoRotate(), 5000);
  }

  updateOffset() {
    // The sliding is handled by individual card transforms, not container offset
    // This method is kept for compatibility but the actual movement is in getCardTransform
  }

  getCardTransform(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    if (normalizedDiff === 0) {
      // Center card - main focus, perfectly centered
      return 'translate(-50%, -50%) translateX(0px) scale(1.2)';
    } else if (normalizedDiff === 1) {
      // Right card - faded, positioned to the right
      return 'translate(-50%, -50%) translateX(320px) scale(0.8)';
    } else if (normalizedDiff === -1) {
      // Left card - faded, positioned to the left
      return 'translate(-50%, -50%) translateX(-320px) scale(0.8)';
    }
    
    // Hide all other cards completely
    return 'translate(-50%, -50%) translateX(0px) scale(0)';
  }

  getCardOpacity(index: number): number {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return 1; // Center - fully visible
    if (Math.abs(normalizedDiff) === 1) return 0.6; // Left/Right - faded
    return 0; // All others - completely hidden
  }

  getCardZIndex(index: number): number {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return 10; // Center - on top
    if (Math.abs(normalizedDiff) === 1) return 5; // Left/Right - middle layer
    return 1; // All others - bottom layer (hidden anyway)
  }

  getCardFilter(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return 'none'; // Center - no blur
    if (Math.abs(normalizedDiff) === 1) return 'blur(1px)'; // Left/Right - slight blur
    return 'none'; // All others - hidden anyway
  }

  getCardWidth(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '280px'; // Center - large
    if (Math.abs(normalizedDiff) === 1) return '200px'; // Left/Right - medium
    return '0px'; // All others - hidden
  }

  getCardHeight(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '320px'; // Center - large
    if (Math.abs(normalizedDiff) === 1) return '240px'; // Left/Right - medium
    return '0px'; // All others - hidden
  }

  getCardPadding(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '32px'; // Center - large padding
    if (Math.abs(normalizedDiff) === 1) return '20px'; // Left/Right - medium padding
    return '0px'; // All others - hidden
  }

  getCardShadow(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '0 20px 40px rgba(0, 0, 0, 0.15)'; // Center - strong shadow
    if (Math.abs(normalizedDiff) === 1) return '0 10px 30px rgba(0, 0, 0, 0.1)'; // Left/Right - medium shadow
    return 'none'; // All others - hidden
  }

  getIconSize(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '80px'; // Center - large icon
    if (Math.abs(normalizedDiff) === 1) return '60px'; // Left/Right - medium icon
    return '0px'; // All others - hidden
  }

  getIconMargin(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '20px'; // Center - large margin
    if (Math.abs(normalizedDiff) === 1) return '16px'; // Left/Right - medium margin
    return '0px'; // All others - hidden
  }

  getSvgSize(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '40px'; // Center - large svg
    if (Math.abs(normalizedDiff) === 1) return '30px'; // Left/Right - medium svg
    return '0px'; // All others - hidden
  }

  getTitleSize(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '20px'; // Center - large title
    if (Math.abs(normalizedDiff) === 1) return '16px'; // Left/Right - medium title
    return '0px'; // All others - hidden
  }

  getTitleMargin(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '0 0 8px 0'; // Center - large margin
    if (Math.abs(normalizedDiff) === 1) return '0 0 6px 0'; // Left/Right - medium margin
    return '0'; // All others - hidden
  }

  getSubtitleSize(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '16px'; // Center - large subtitle
    if (Math.abs(normalizedDiff) === 1) return '14px'; // Left/Right - medium subtitle
    return '0px'; // All others - hidden
  }

  getSubtitleMargin(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '0 0 8px 0'; // Center - large margin
    if (Math.abs(normalizedDiff) === 1) return '0 0 6px 0'; // Left/Right - medium margin
    return '0'; // All others - hidden
  }

  getDescriptionSize(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '14px'; // Center - large description
    if (Math.abs(normalizedDiff) === 1) return '12px'; // Left/Right - medium description
    return '0px'; // All others - hidden
  }

  getDescriptionMargin(index: number): string {
    const diff = index - this.currentIndex;
    
    // Handle circular wrapping
    let normalizedDiff = diff;
    if (diff > this.achievements.length / 2) {
      normalizedDiff = diff - this.achievements.length;
    } else if (diff < -this.achievements.length / 2) {
      normalizedDiff = diff + this.achievements.length;
    }
    
    // Only show 3 cards: center, left, right
    if (normalizedDiff === 0) return '0'; // Center - no extra margin
    if (Math.abs(normalizedDiff) === 1) return '0'; // Left/Right - no extra margin
    return '0'; // All others - hidden
  }

  onButtonHover(event: MouseEvent, isEntering: boolean) {
    const target = event.target as HTMLElement;
    if (target) {
      target.style.transform = isEntering ? 'scale(1.1)' : 'scale(1)';
    }
  }
}
