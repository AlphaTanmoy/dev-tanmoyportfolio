import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Hero } from '../../features/hero/hero';
import { About } from '../../features/about/about';
import { Contact } from '../../features/contact/contact';
import { Education } from '../../features/education/education';
import { Skills } from '../../features/skills/skills';
import { Projects } from '../../features/projects/projects';
import { Experience } from '../../features/experience/experience';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    Footer,
    About,
    Experience,
    Projects,
    Skills,
    Education,
    Contact
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
