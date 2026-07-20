import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  image: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  categories: SkillCategory[] = [
    {
      title: 'Backend Development',
      image: 'assets/images/backend.png',
      skills: [
        'Java',
        'Spring Boot',
        'Kotlin',
        'REST API',
        'Microservices',
        'JWT',
        'OAuth2'
      ]
    },
    {
      title: 'Database & Cache',
      image: 'assets/images/database.png',
      skills: [
        'PostgreSQL',
        'MySQL',
        'Redis',
        'MongoDB'
      ]
    },
    {
      title: 'Frontend',
      image: 'assets/images/frontend.png',
      skills: [
        'Angular',
        'TypeScript',
        'HTML',
        'CSS',
        'SCSS'
      ]
    },
    {
      title: 'DevOps & Cloud',
      image: 'assets/images/cloud.png',
      skills: [
        'Docker',
        'Linux',
        'AWS',
        'Git',
        'GitHub'
      ]
    },
    {
      title: 'Tools & Messaging',
      image: 'assets/images/tools.png',
      skills: [
        'RabbitMQ',
        'Postman',
        'Maven',
        'Gradle',
        'IntelliJ IDEA'
      ]
    }
  ];

}