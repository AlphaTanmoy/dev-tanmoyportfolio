import { Component } from '@angular/core';
import {
    LucideAngularModule,
    Github,
    Linkedin,
    Youtube,
    Globe
} from 'lucide-angular';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [LucideAngularModule],
    templateUrl: './footer.html',
    styleUrl: './footer.scss'
})
export class Footer {

    readonly Github = Github;
    readonly Linkedin = Linkedin;
    readonly Youtube = Youtube;
    readonly Globe = Globe;

}