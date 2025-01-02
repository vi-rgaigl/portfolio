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

  projects = [
    { 
      id: 1,
      name: 'Join',
      description: 'Join is a mobile application that allows users to create and join events in their area.',
      image: 'join.png',
      github: 'https://github.com/vi-rgaigl/join',
      link: 'https://regina-gaigl.developerakademie.net/join.net',
      technologies: 'HTML | CSS | JavaScript | Firebase',
      learned: 'I learned how to use Firebase to store and retrieve data from a database.',
    },
    {
      id: 2,
      name: 'El polo loco',
      description: 'El polo loco is a jump and run game based on object-oriented programming.',
      image: 'pollo-loco.png',
      github: 'https://github.com/vi-rgaigl/el-pollo-loco',
      link: 'https://regina-gaigl.developerakademie.net/el-pollo-loco.net',
      technologies: 'HTML | CSS | JavaScript',
      learned: 'I learned how to use object-oriented programming to create a game.',
    }
  ];

}
