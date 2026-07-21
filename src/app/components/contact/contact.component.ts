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
    // Download the actual resume PDF file
    const a = document.createElement('a');
    a.href = '/Tanmoy_Das_Resume.pdf';
    a.download = 'Tanmoy_Das_Resume.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
