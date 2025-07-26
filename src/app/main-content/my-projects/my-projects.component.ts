import { Component, Input } from '@angular/core';
import { ProjectData } from './../interfaces/projects.interface'
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";


@Component({
  selector: 'app-my-projects',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
@Input() projectData!: ProjectData;
selectedProject: string = 'ONGOING_PROJECT';
selectedProjectId: number = 1; 

selectProject(id: number) {
  
  this.selectedProjectId = id;
}

}
