import { Component, signal } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { MobileTopNavbarComponent } from './components/mobile-top-navbar/mobile-top-navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    MobileNavbarComponent,
    MobileTopNavbarComponent,
    HeroComponent,
    SkillsComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    AchievementsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dev-portfolio');
}
