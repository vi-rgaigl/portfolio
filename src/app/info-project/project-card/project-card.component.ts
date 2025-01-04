import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  constructor(public translocoService: TranslocoService) {}

  @Input() project: any;

  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
