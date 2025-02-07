import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";

@Component({
  selector: 'app-contac',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContacComponent { }
