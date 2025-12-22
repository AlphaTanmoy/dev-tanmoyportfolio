import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" style="padding: 60px 0; background-color: #f9fafb; overflow-x: hidden;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 16px; overflow-x: hidden;">
        <style>
          @media (max-width: 767px) {
            #contact {
              padding: 60px 0;
              overflow-x: hidden;
            }
            #contact > div {
              padding: 0 8px !important;
              overflow-x: hidden;
            }
          }
        </style>
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 32px; font-weight: bold; color: #1f2937; margin-bottom: 12px;">Get In Touch</h2>
          <p style="font-size: 16px; color: #6b7280; max-width: 600px; margin: 0 auto;">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out through any of these channels!
          </p>
        </div>
        
        <div style="display: flex; flex-direction: column; align-items: center; gap: 32px; max-width: 1200px; margin: 0 auto;">
          
          <!-- CV Download Button -->
          <div style="text-align: center;">
            <button (click)="downloadCV()" 
                    (mouseenter)="onButtonHover($event, true)"
                    (mouseleave)="onButtonHover($event, false)"
                    style="background: linear-gradient(135deg, #3b82f6, #9333ea); color: white; border: none; border-radius: 12px; padding: 16px 32px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);">
              <span style="display: flex; align-items: center; gap: 8px;">
                <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download CV
              </span>
            </button>
          </div>
          
          <!-- Contact Cards Grid -->
          <div class="contact-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; width: 100%; max-width: 1200px; padding: 0 16px; box-sizing: border-box; margin: 0 auto;">
            
            <!-- Email Card -->
            <div class="contact-card" style="background: white; border-radius: 16px; padding: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
                 (mouseenter)="onCardHover($event, true)"
                 (mouseleave)="onCardHover($event, false)"
                 (click)="openEmail()">
              <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div class="icon-container" style="width: 56px; height: 56px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  <svg style="width: 28px; height: 28px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 style="font-size: 18px; font-weight: bold; color: #1f2937; margin-bottom: 6px;">Email</h3>
                <p style="font-size: 14px; color: #6b7280; margin: 0;">tanmoy@example.com</p>
              </div>
            </div>
            
            <!-- LinkedIn Card -->
            <div class="contact-card" style="background: white; border-radius: 16px; padding: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
                 (mouseenter)="onCardHover($event, true)"
                 (mouseleave)="onCardHover($event, false)"
                 (click)="openLinkedIn()">
              <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div class="icon-container" style="width: 56px; height: 56px; background: linear-gradient(135deg, #0077b5, #005885); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  <svg style="width: 28px; height: 28px; color: white;" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 style="font-size: 18px; font-weight: bold; color: #1f2937; margin-bottom: 6px;">LinkedIn</h3>
                <p style="font-size: 14px; color: #6b7280; margin: 0;">linkedin.com/in/tanmoy</p>
              </div>
            </div>
            
            <!-- GitHub Card -->
            <div class="contact-card" style="background: white; border-radius: 16px; padding: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
                 (mouseenter)="onCardHover($event, true)"
                 (mouseleave)="onCardHover($event, false)"
                 (click)="openGitHub()">
              <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div class="icon-container" style="width: 56px; height: 56px; background: linear-gradient(135deg, #24292e, #1a1e22); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  <svg style="width: 28px; height: 28px; color: white;" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h3 style="font-size: 18px; font-weight: bold; color: #1f2937; margin-bottom: 6px;">GitHub</h3>
                <p style="font-size: 14px; color: #6b7280; margin: 0;">github.com/tanmoydev</p>
              </div>
            </div>
            
            <!-- Twitter Card -->
            <div class="contact-card" style="background: white; border-radius: 16px; padding: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
                 (mouseenter)="onCardHover($event, true)"
                 (mouseleave)="onCardHover($event, false)"
                 (click)="openTwitter()">
              <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div class="icon-container" style="width: 56px; height: 56px; background: linear-gradient(135deg, #1da1f2, #0c85d0); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  <svg style="width: 28px; height: 28px; color: white;" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <h3 style="font-size: 18px; font-weight: bold; color: #1f2937; margin-bottom: 6px;">Twitter</h3>
                <p style="font-size: 14px; color: #6b7280; margin: 0;">@tanmoydev</p>
              </div>
            </div>
            
            <!-- Instagram Card -->
            <div class="contact-card" style="background: white; border-radius: 16px; padding: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
                 (mouseenter)="onCardHover($event, true)"
                 (mouseleave)="onCardHover($event, false)"
                 (click)="openInstagram()">
              <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div class="icon-container" style="width: 56px; height: 56px; background: linear-gradient(135deg, #e4405f, #c13584, #833ab4); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  <svg style="width: 28px; height: 28px; color: white;" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </div>
                <h3 style="font-size: 18px; font-weight: bold; color: #1f2937; margin-bottom: 6px;">Instagram</h3>
                <p style="font-size: 14px; color: #6b7280; margin: 0;">@tanmoydev</p>
              </div>
            </div>
            
            <!-- Portfolio Card -->
            <div class="contact-card" style="background: white; border-radius: 16px; padding: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
                 (mouseenter)="onCardHover($event, true)"
                 (mouseleave)="onCardHover($event, false)"
                 (click)="openPortfolio()">
              <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div class="icon-container" style="width: 56px; height: 56px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  <svg style="width: 28px; height: 28px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 style="font-size: 18px; font-weight: bold; color: #1f2937; margin-bottom: 6px;">Portfolio</h3>
                <p style="font-size: 14px; color: #6b7280; margin: 0;">tanmoyportfolio.com</p>
              </div>
            </div>
          </div>
          
          <!-- Desktop styles -->
          <style>
            @media (min-width: 768px) {
              #contact {
                padding: 80px 0;
              }
              #contact h2 {
                font-size: 48px;
              }
              #contact p {
                font-size: 18px;
              }
              #contact .contact-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
                max-width: 1200px;
                padding: 0 16px;
              }
              #contact .contact-card {
                padding: 32px;
              }
              #contact .contact-card svg {
                width: 32px;
                height: 32px;
              }
              #contact .contact-card .icon-container {
                width: 64px;
                height: 64px;
              }
              #contact .contact-card h3 {
                font-size: 20px;
              }
              #contact .contact-card p {
                font-size: 16px;
              }
            }
            
            @media (max-width: 767px) {
              #contact .contact-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
                max-width: 380px;
                padding: 0 8px;
              }
              #contact .contact-card {
                padding: 16px;
                box-sizing: border-box;
              }
            }
            
            @media (max-width: 480px) {
              #contact .contact-grid {
                grid-template-columns: 1fr;
                padding: 0 12px;
              }
            }
          </style>
        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class ContactComponent {
  
  downloadCV() {
    // Create a sample CV download
    const cvContent = `
Tanmoy Kumar
Frontend Developer | Angular | React | TypeScript

Email: tanmoy@example.com
Phone: +1 (555) 123-4567
LinkedIn: linkedin.com/in/tanmoy

EXPERIENCE
-----------
Senior Frontend Developer | Tech Company Inc. | 2022 - Present
- Led development of enterprise-scale applications
- Implemented responsive design patterns
- Optimized application performance by 40%

Frontend Developer | StartupXYZ | 2020 - 2022
- Built modern web applications using Angular and React
- Collaborated with UX team to implement design systems
- Reduced page load time by 30%

SKILLS
-------
Technical: Angular, React, TypeScript, JavaScript, HTML5, CSS3, TailwindCSS
Tools: Git, Webpack, Vite, Jest, Cypress
Soft: Team Leadership, Problem Solving, Communication

EDUCATION
---------
Bachelor of Technology in Computer Science
University of Technology | 2016 - 2020

ACHIEVEMENTS
------------
- Hackathon Winner 2023
- Performance Award 2022
- Open Source Contributor
`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Tanmoy_Kumar_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  onButtonHover(event: MouseEvent, isEntering: boolean) {
    const target = event.target as HTMLElement;
    if (target) {
      if (isEntering) {
        target.style.transform = 'translateY(-2px)';
        target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
      } else {
        target.style.transform = 'translateY(0)';
        target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
      }
    }
  }

  onCardHover(event: MouseEvent, isEntering: boolean) {
    const target = event.currentTarget as HTMLElement;
    if (target) {
      if (isEntering) {
        target.style.transform = 'translateY(-5px)';
        target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
      } else {
        target.style.transform = 'translateY(0)';
        target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
      }
    }
  }

  openEmail() {
    window.open('mailto:tanmoy@example.com', '_blank');
  }

  openLinkedIn() {
    window.open('https://linkedin.com/in/tanmoy', '_blank');
  }

  openGitHub() {
    window.open('https://github.com/tanmoydev', '_blank');
  }

  openTwitter() {
    window.open('https://twitter.com/tanmoydev', '_blank');
  }

  openInstagram() {
    window.open('https://instagram.com/tanmoydev', '_blank');
  }

  openPortfolio() {
    window.open('https://tanmoyportfolio.com', '_blank');
  }
}
