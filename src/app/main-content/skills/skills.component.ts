import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  icons = [
    { 'img': 'angular.png', 'title': 'Angular' },
    { 'img': 'typescript.png', 'title': 'TypeScript' },
    { 'img': 'javascript.png', 'title': 'JavaScript' },
    { 'img': 'html.png', 'title': 'HTML' },
    { 'img': 'css.png', 'title': 'CSS' },
    { 'img': 'rest-api.png', 'title': 'Rest-Api' },
    { 'img': 'firebase.png', 'title': 'Firebase' },
    { 'img': 'git.png', 'title': 'GIT' },
    { 'img': 'scrum.png', 'title': 'Scrum' },
    { 'img': 'material-design.png', 'title': 'Material Design' },
    { 'img': 'bootstrap.png', 'title': 'Bootstrap' },
    { 'img': 'copilot.png', 'title': 'Github Copilot' },
    { 'img': 'challenge.png', 'title': 'Challange me' },
  ];

}
