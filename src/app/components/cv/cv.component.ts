import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvComponent { }
