import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from "../components/nav/nav.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { CvComponent } from "../components/cv/cv.component";
import { SkillsComponent } from '../components/skills/skills.component';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, NavComponent, ProjectsComponent, CvComponent, SkillsComponent],
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortafolioComponent {

  constructor() {  
  } 

 }
