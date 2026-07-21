import { Component } from '@angular/core';

interface Project {

  name: string;

  techStack: string[];

  status: 'Done' | 'Working' | 'Updating';

  liveUrl?: string;

  directLink?: string;

  associatedText?: string;
  
  associatedIcon?: string;
  
  description: string;

  github: string;

}

@Component({

  selector: 'app-projects',

  standalone: true,

  templateUrl: './projects.html',

  styleUrl: './projects.scss'

})

export class Projects {
  searchTerm = '';

  projects: Project[] = [

    {

      name: 'Shiva AI ',

      techStack: [
        'Java',
        'Spring Boot',
        'Ollama',
        'RAG',
        'LLM',
        'PostgreSQL',
        'Redis'
      ],

      status: 'Working',

      liveUrl: 'https://shivaai.tanmoysyatraofficial.store/',

      directLink: '',
      associatedText: '',
      associatedIcon: '',

      description:
        'Developing an AI-powered spiritual assistant using Spring Boot, Ollama, and LLMs. Training domain-specific models' +
        'with Shiva Puranas and implementing Retrieval-Augmented Generation (RAG) to deliver context-aware responses from' +
        'Shaivism literature.',

      github:
        'https://github.com/AlphaTanmoy/shivaAi'

    },

    {

      name: 'Educare Carefully Institute (Version 1.0)',

      techStack: [
        'Node.js',
        'Express.js',
        'Angular.js',
        'MongoDB',
        'Vercel',
        'Render'
      ],

      status: 'Done',

      liveUrl: 'https://www.eciboard.in/home',

      directLink: '',
      associatedText: '',
      associatedIcon: '',

      description:
        'Delivered the complete Version 1.0 of an education-management platform which serving 15,000+ students and 50+' +
        'franchise centers, handling 20,000+ monthly requests. serving 15,000+ students and 50+ franchise centers, handling' +
        '20,000+ monthly requests.',

      github:
        'https://github.com/AlphaTanmoy/eduCare_frontEnd'

    },

    {

      name: 'ASL Recognizer',

      techStack: [
        'Python',
        'TensorFlow',
        'OpenCV',
        'Flask',
        'Keras',
        'MySQL'
      ],

      status: 'Done',

      directLink: '',
      associatedText: '',
      associatedIcon: '',
      liveUrl: '',

      description:
        'ASL Stands for American Sign Language Recognition, build this by using Python, Keras, OpenCV and ' +
        'Tensorflow as Backend. Developed a model then train it from Keras Dataset and Then also deploy it in' +
        ' a web Application using Flask and Also made a Desktop Application. Model Accuracy - 97.65%',

      github:
        'https://github.com/AlphaTanmoy/ASL-Recognition'

    },

    {

      name: 'Airline Reservation System',

      techStack: [
        'Java',
        'MVC',
        'JSP',
        'Servlet',
        'MySQL',
        'HTML',
        'CSS',
        'JavaScript'
      ],

      status: 'Done',

      liveUrl: '',
      directLink: '',
      associatedText: '',
      associatedIcon: '',

      description:
        'This Website works as Online Airline reservation system, web page made using HTML, CSS, JS, ' +
        'with JSP and Servlet Mechanism Based on MVC Frame work. Also integrated with MySQL Database ' +
        'with Authentication & Authorization. Also has both Client Portal, Admin Portal and also a basic view Portal.',

      github:
        'https://github.com/AlphaTanmoy/Airline-Reservation-System'

    },

    {

      name: "Tanmoy's Yatra",

      techStack: [
        'React.js',
        'HTML',
        'CSS',
        'JavaScript'
      ],

      status: 'Updating',

      liveUrl: 'https://blog.tanmoysyatraofficial.store',
      directLink: 'https://www.youtube.com/@TanmoysYatraOfficial',
      associatedIcon: 'fa-video',
      associatedText: "Tanmoy's Yatra",

      description:
        "This is for my Youtube Blog Posts, where I share my travel experiences and also share my travel vlogs. ",

      github:
        'https://github.com/AlphaTanmoy/tanmoysyatra'

    },

    {

      name: "Drowniness-Detection",

      techStack: [
        'Java',
        'Spring Boot',
        'Python',
        'React.js',
        'OpenCV',
        'TensorFlow',
        'Keras',
        'PostgreSQL',
      ],

      status: 'Done',

      liveUrl: '',
      directLink: '',
      associatedText: '',
      associatedIcon: '',

      description:
        "Drowniness Detection with Python, Java, Spring boot and Full Stack app in React and Java to monitor the drowsiness of the driver and alert them in case of drowsiness.",

      github:
        'https://github.com/AlphaTanmoy/Drowniness-Detection'

    }

  ];

  filteredProjects: Project[] = [...this.projects];



  onSearch(event: Event): void {

    const input = event.target as HTMLInputElement;

    this.searchTerm = input.value;

    this.filterProjects();

  }



  filterProjects(): void {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    if (!search) {

      this.filteredProjects = [...this.projects];

      return;

    }

    this.filteredProjects = this.projects.filter(project =>

      project.techStack.some(tech =>

        tech.toLowerCase().includes(search)

      )

    );

  }

}