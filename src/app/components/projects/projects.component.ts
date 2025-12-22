import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" style="padding: 80px 0; background-color: white;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 16px;">
        <div style="text-align: center; margin-bottom: 60px;">
          <h2 style="font-size: 48px; font-weight: bold; color: #1f2937; margin-bottom: 16px;">Featured Projects</h2>
          <p style="font-size: 18px; color: #6b7280; max-width: 600px; margin: 0 auto;">
            Explore my recent work and side projects. Click on any project to learn more.
          </p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px; max-width: 1200px; margin: 0 auto;">
          
          <!-- Project Card 1 -->
          <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
               (mouseenter)="onProjectHover($event, true)"
               (mouseleave)="onProjectHover($event, false)"
               (click)="openProject('ecommerce-platform')">
            
            <!-- Project Image -->
            <div style="height: 240px; background: linear-gradient(135deg, #3b82f6, #9333ea); position: relative; overflow: hidden;">
              <div style="position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=240&fit=crop&crop=center') center/cover; opacity: 0.9;"></div>
              <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8));"></div>
              <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                <svg style="width: 48px; height: 48px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
            </div>
            
            <!-- Project Content -->
            <div style="padding: 24px;">
              <h3 style="font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 12px;">E-Commerce Platform</h3>
              <p style="font-size: 16px; color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
                Full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design. Features include user authentication, product catalog, shopping cart, and order tracking.
              </p>
              
              <!-- Tech Stack -->
              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
                <span style="padding: 6px 12px; background-color: #dbeafe; color: #1e40af; border-radius: 20px; font-size: 14px; font-weight: 500;">Angular</span>
                <span style="padding: 6px 12px; background-color: #dcfce7; color: #166534; border-radius: 20px; font-size: 14px; font-weight: 500;">Node.js</span>
                <span style="padding: 6px 12px; background-color: #f3e8ff; color: #7c3aed; border-radius: 20px; font-size: 14px; font-weight: 500;">MongoDB</span>
                <span style="padding: 6px 12px; background-color: #fef3c7; color: #d97706; border-radius: 20px; font-size: 14px; font-weight: 500;">Stripe API</span>
              </div>
              
              <!-- View Project Link -->
              <div style="display: flex; align-items: center; color: #3b82f6; font-weight: 600; font-size: 16px;">
                <span>View Project</span>
                <svg style="width: 20px; height: 20px; margin-left: 8px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Project Card 2 -->
          <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
               (mouseenter)="onProjectHover($event, true)"
               (mouseleave)="onProjectHover($event, false)"
               (click)="openProject('analytics-dashboard')">
            
            <!-- Project Image -->
            <div style="height: 240px; background: linear-gradient(135deg, #10b981, #059669); position: relative; overflow: hidden;">
              <div style="position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&crop=center') center/cover; opacity: 0.9;"></div>
              <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8));"></div>
              <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                <svg style="width: 48px; height: 48px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
            </div>
            
            <!-- Project Content -->
            <div style="padding: 24px;">
              <h3 style="font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 12px;">Analytics Dashboard</h3>
              <p style="font-size: 16px; color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
                Real-time data visualization and business intelligence platform with interactive charts, customizable widgets, and automated reporting. Features include data export, scheduled reports, and multi-user collaboration.
              </p>
              
              <!-- Tech Stack -->
              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
                <span style="padding: 6px 12px; background-color: #dbeafe; color: #1e40af; border-radius: 20px; font-size: 14px; font-weight: 500;">React</span>
                <span style="padding: 6px 12px; background-color: #fef3c7; color: #d97706; border-radius: 20px; font-size: 14px; font-weight: 500;">D3.js</span>
                <span style="padding: 6px 12px; background-color: #fee2e2; color: #dc2626; border-radius: 20px; font-size: 14px; font-weight: 500;">Redis</span>
                <span style="padding: 6px 12px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 14px; font-weight: 500;">WebSocket</span>
              </div>
              
              <!-- View Project Link -->
              <div style="display: flex; align-items: center; color: #10b981; font-weight: 600; font-size: 16px;">
                <span>View Project</span>
                <svg style="width: 20px; height: 20px; margin-left: 8px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Project Card 3 -->
          <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
               (mouseenter)="onProjectHover($event, true)"
               (mouseleave)="onProjectHover($event, false)"
               (click)="openProject('mobile-app')">
            
            <!-- Project Image -->
            <div style="height: 240px; background: linear-gradient(135deg, #f59e0b, #ef4444); position: relative; overflow: hidden;">
              <div style="position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1512946376910-2a0b1e2c1b6d?w=400&h=240&fit=crop&crop=center') center/cover; opacity: 0.9;"></div>
              <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(245, 158, 11, 0.8), rgba(239, 68, 68, 0.8));"></div>
              <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                <svg style="width: 48px; height: 48px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
            
            <!-- Project Content -->
            <div style="padding: 24px;">
              <h3 style="font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 12px;">Task Management App</h3>
              <p style="font-size: 16px; color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
                Cross-platform mobile application for task management with real-time synchronization, push notifications, and collaborative features. Includes offline support, file attachments, and team workspaces.
              </p>
              
              <!-- Tech Stack -->
              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
                <span style="padding: 6px 12px; background-color: #cffafe; color: #0891b2; border-radius: 20px; font-size: 14px; font-weight: 500;">Flutter</span>
                <span style="padding: 6px 12px; background-color: #fed7aa; color: #ea580c; border-radius: 20px; font-size: 14px; font-weight: 500;">Firebase</span>
                <span style="padding: 6px 12px; background-color: #e9d5ff; color: #9333ea; border-radius: 20px; font-size: 14px; font-weight: 500;">GraphQL</span>
                <span style="padding: 6px 12px; background-color: #dcfce7; color: #16a34a; border-radius: 20px; font-size: 14px; font-weight: 500;">AWS</span>
              </div>
              
              <!-- View Project Link -->
              <div style="display: flex; align-items: center; color: #f59e0b; font-weight: 600; font-size: 16px;">
                <span>View Project</span>
                <svg style="width: 20px; height: 20px; margin-left: 8px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Project Card 4 -->
          <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
               (mouseenter)="onProjectHover($event, true)"
               (mouseleave)="onProjectHover($event, false)"
               (click)="openProject('social-media-api')">
            
            <!-- Project Image -->
            <div style="height: 240px; background: linear-gradient(135deg, #8b5cf6, #ec4899); position: relative; overflow: hidden;">
              <div style="position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=240&fit=crop&crop=center') center/cover; opacity: 0.9;"></div>
              <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8));"></div>
              <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                <svg style="width: 48px; height: 48px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 68h8a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zm0 0V8a2 2 0 012-2h8a2 2 0 012 2v20m-6 0h6"></path>
                </svg>
              </div>
            </div>
            
            <!-- Project Content -->
            <div style="padding: 24px;">
              <h3 style="font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 12px;">Social Media API</h3>
              <p style="font-size: 16px; color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
                RESTful API service for social media platforms with user authentication, content management, and real-time notifications. Features include rate limiting, caching, and comprehensive documentation.
              </p>
              
              <!-- Tech Stack -->
              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
                <span style="padding: 6px 12px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 14px; font-weight: 500;">Node.js</span>
                <span style="padding: 6px 12px; background-color: #dbeafe; color: #1e40af; border-radius: 20px; font-size: 14px; font-weight: 500;">Express</span>
                <span style="padding: 6px 12px; background-color: #f3e8ff; color: #7c3aed; border-radius: 20px; font-size: 14px; font-weight: 500;">PostgreSQL</span>
                <span style="padding: 6px 12px; background-color: #dcfce7; color: #16a34a; border-radius: 20px; font-size: 14px; font-weight: 500;">Redis</span>
              </div>
              
              <!-- View Project Link -->
              <div style="display: flex; align-items: center; color: #8b5cf6; font-weight: 600; font-size: 16px;">
                <span>View Project</span>
                <svg style="width: 20px; height: 20px; margin-left: 8px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Project Card 5 -->
          <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
               (mouseenter)="onProjectHover($event, true)"
               (mouseleave)="onProjectHover($event, false)"
               (click)="openProject('ai-chatbot')">
            
            <!-- Project Image -->
            <div style="height: 240px; background: linear-gradient(135deg, #06b6d4, #0891b2); position: relative; overflow: hidden;">
              <div style="position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1531297483712-64244a022a23?w=400&h=240&fit=crop&crop=center') center/cover; opacity: 0.9;"></div>
              <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(6, 182, 212, 0.8), rgba(8, 145, 178, 0.8));"></div>
              <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                <svg style="width: 48px; height: 48px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
            </div>
            
            <!-- Project Content -->
            <div style="padding: 24px;">
              <h3 style="font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 12px;">AI Customer Support Bot</h3>
              <p style="font-size: 16px; color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
                Intelligent chatbot powered by machine learning for automated customer support. Features natural language processing, sentiment analysis, multi-language support, and seamless human handoff.
              </p>
              
              <!-- Tech Stack -->
              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
                <span style="padding: 6px 12px; background-color: #fef3c7; color: #d97706; border-radius: 20px; font-size: 14px; font-weight: 500;">Python</span>
                <span style="padding: 6px 12px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 14px; font-weight: 500;">TensorFlow</span>
                <span style="padding: 6px 12px; background-color: #dcfce7; color: #16a34a; border-radius: 20px; font-size: 14px; font-weight: 500;">FastAPI</span>
                <span style="padding: 6px 12px; background-color: #fee2e2; color: #dc2626; border-radius: 20px; font-size: 14px; font-weight: 500;">Docker</span>
              </div>
              
              <!-- View Project Link -->
              <div style="display: flex; align-items: center; color: #06b6d4; font-weight: 600; font-size: 16px;">
                <span>View Project</span>
                <svg style="width: 20px; height: 20px; margin-left: 8px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Project Card 6 -->
          <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
               (mouseenter)="onProjectHover($event, true)"
               (mouseleave)="onProjectHover($event, false)"
               (click)="openProject('blockchain-wallet')">
            
            <!-- Project Image -->
            <div style="height: 240px; background: linear-gradient(135deg, #6366f1, #4f46e5); position: relative; overflow: hidden;">
              <div style="position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=240&fit=crop&crop=center') center/cover; opacity: 0.9;"></div>
              <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(79, 70, 229, 0.8));"></div>
              <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                <svg style="width: 48px; height: 48px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
            </div>
            
            <!-- Project Content -->
            <div style="padding: 24px;">
              <h3 style="font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 12px;">Blockchain Wallet</h3>
              <p style="font-size: 16px; color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
                Secure cryptocurrency wallet with multi-chain support, hardware wallet integration, and DeFi protocol access. Features include portfolio tracking, transaction history, and yield farming capabilities.
              </p>
              
              <!-- Tech Stack -->
              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
                <span style="padding: 6px 12px; background-color: #fef3c7; color: #d97706; border-radius: 20px; font-size: 14px; font-weight: 500;">Solidity</span>
                <span style="padding: 6px 12px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 14px; font-weight: 500;">Web3.js</span>
                <span style="padding: 6px 12px; background-color: #dbeafe; color: #1e40af; border-radius: 20px; font-size: 14px; font-weight: 500;">React</span>
                <span style="padding: 6px 12px; background-color: #f3e8ff; color: #7c3aed; border-radius: 20px; font-size: 14px; font-weight: 500;">Ethereum</span>
              </div>
              
              <!-- View Project Link -->
              <div style="display: flex; align-items: center; color: #6366f1; font-weight: 600; font-size: 16px;">
                <span>View Project</span>
                <svg style="width: 20px; height: 20px; margin-left: 8px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- Show More Button -->
        <div style="text-align: center; margin-top: 48px;">
          <button (click)="showMoreProjects()"
                  (mouseenter)="onButtonHover($event, true)"
                  (mouseleave)="onButtonHover($event, false)"
                  style="background: transparent; color: #6b7280; border: 2px solid #e5e7eb; border-radius: 12px; padding: 16px 32px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
            Show More Projects
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [``]
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
