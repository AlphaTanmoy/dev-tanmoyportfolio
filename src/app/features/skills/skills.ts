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
      image: '/api.png',
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
      image: '/db.png',
      skills: [
        'PostgreSQL',
        'MySQL',
        'Redis',
        'MongoDB'
      ]
    },
    {
      title: 'Frontend',
      image: '/fe.png',
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
      image: '/cloud.png',
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
      image: '/tool.png',
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