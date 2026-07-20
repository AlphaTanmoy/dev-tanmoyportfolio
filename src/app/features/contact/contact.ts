import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  readonly email = 'tanmoy.official.24@gmail.com';

  copyEmail(): void {

    navigator.clipboard.writeText(this.email);

    alert('Email copied successfully.');

  }

  downloadResume(): void {

    window.open('/assets/resume/Tanmoy_Das_Resume.pdf', '_blank');

  }

  sendMail(): void {

    window.open(
      'mailto:tanmoy.official.24@gmail.com',
      '_blank'
    );

  }

}