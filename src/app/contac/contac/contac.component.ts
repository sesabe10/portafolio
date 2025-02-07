import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contac',
  standalone: true,
  imports: [],
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContacComponent { }
