import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ProjectCardComponent } from '../../info-project/project-card/project-card.component';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [TranslocoModule, ProjectCardComponent ],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

}
