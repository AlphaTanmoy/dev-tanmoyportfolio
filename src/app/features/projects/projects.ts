import { Component } from '@angular/core';

interface Project {

    name: string;

    techStack: string[];

    status: 'Done' | 'Working';

    liveUrl?: string;

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

            name: 'Task Management System',

            techStack: [
                'Java',
                'Spring Boot',
                'PostgreSQL',
                'Redis'
            ],

            status: 'Done',

            liveUrl: '',

            description:
                'A scalable task management backend with authentication, role management, and REST APIs.',

            github:
                'https://github.com/yourusername/project'

        },

        {

            name: 'Payment Gateway Service',

            techStack: [
                'Kotlin',
                'Spring Boot',
                'AWS',
                'Redis'
            ],

            status: 'Working',

            liveUrl: '',

            description:
                'Microservice-based payment processing system with third-party gateway integrations.',

            github:
                'https://github.com/yourusername/payment'

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