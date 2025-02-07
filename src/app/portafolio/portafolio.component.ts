import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from "../components/nav/nav.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { CvComponent } from "../components/cv/cv.component";

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, NavComponent, ProjectsComponent, CvComponent],
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortafolioComponent {

  constructor() {  
  }

  images = [
    {
      route: "assets/angular.png",
      title: "Angular"
    },
    {
      route: "assets/js.png",
      title: 'JavaScript'
    },
    {
      route: "assets/html.png",
      title: 'HTML'
    },
    {
      route: "assets/css.png",
      title: 'CSS'
    }
  ]  

 }
