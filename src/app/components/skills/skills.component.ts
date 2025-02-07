import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent { 
  constructor() {}

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
    },
    {
      route: "assets/css.png",
      title: 'CSS'
    }
  ]  
}
