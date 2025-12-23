import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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
