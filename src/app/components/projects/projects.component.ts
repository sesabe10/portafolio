import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent { 
  constructor() { }

  projects = [
    {
      title: "Zax FM",
      img: 'assets/zaxfm.png',
      url: "https://zaxfm.com",
      description: "Link externo página web"
    },
    {
      title: "WebApp",
      img: 'assets/webApp.png',
      url: "https://app.zaxfm.com",
      description: "Link externo página web"
    },
    {
      title: "Conversor de monedas",
      img: 'assets/conversion.png',
      url: "https://github.com/sesabe10/conversionchallenge",
      description: "Link externo página web"
    },
    {
      title: "App Citas",
      img: 'assets/citas.png',
      url: "https://citasangular.netlify.app/",
      description: "Link externo página web"
    },
    {
      title: "WeatherApp",
      img: 'assets/wetaherApp.png',
      url: "https://angularweatherssb.netlify.app/",
      description: "Link externo página web"
    }
  ]  
}
