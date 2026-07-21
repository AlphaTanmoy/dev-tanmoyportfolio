import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  onProjectHover(event: MouseEvent, isEntering: boolean) {
    const target = event.currentTarget as HTMLElement;
    if (target) {
      if (isEntering) {
        target.style.transform = 'translateY(-8px)';
        target.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
      } else {
        target.style.transform = 'translateY(0)';
        target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
      }
    }
  }

  onButtonHover(event: MouseEvent, isEntering: boolean) {
    const target = event.target as HTMLElement;
    if (target) {
      if (isEntering) {
        target.style.backgroundColor = '#f9fafb';
        target.style.borderColor = '#9ca3af';
        target.style.color = '#374151';
      } else {
        target.style.backgroundColor = 'transparent';
        target.style.borderColor = '#e5e7eb';
        target.style.color = '#6b7280';
      }
    }
  }

  openProject(projectId: string) {
    // Redirect to specific project pages
    const projectUrls: Record<string, string> = {
      'ecommerce-platform': 'https://github.com/tanmoydev/ecommerce-platform',
      'analytics-dashboard': 'https://github.com/tanmoydev/analytics-dashboard',
      'mobile-app': 'https://github.com/tanmoydev/task-management-app',
      'social-media-api': 'https://github.com/tanmoydev/social-media-api',
      'ai-chatbot': 'https://github.com/tanmoydev/ai-customer-support',
      'blockchain-wallet': 'https://github.com/tanmoydev/blockchain-wallet'
    };
    
    const url = projectUrls[projectId] || 'https://github.com/tanmoydev';
    window.open(url, '_blank');
  }

  showMoreProjects() {
    // Redirect to GitHub profile for more projects
    window.open('https://github.com/tanmoydev?tab=repositories', '_blank');
  }
}
