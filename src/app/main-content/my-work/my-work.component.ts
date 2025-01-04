import { Component } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
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
      description_en: 'Join is a mobile application that allows users to create and join events in their area.',
      description_de: 'Join ist eine mobile Anwendung, die es Benutzern ermöglicht, Veranstaltungen in ihrer Umgebung zu erstellen und beizutreten.',
      image: 'join.png',
      github: 'https://github.com/vi-rgaigl/join',
      link: 'https://regina-gaigl.developerakademie.net/join.net',
      technologies: 'HTML | CSS | JavaScript | Firebase',
      learned_en: 'I learned how to use Firebase to store and retrieve data from a database.',
      learned_de: 'Ich habe gelernt wie ich Firebase benutze, um Daten in einer Datenbank zu speichern und abzurufen.'
    },
    {
      id: 2,
      name: 'El polo loco',
      description_en: 'El polo loco is a jump and run game based on object-oriented programming.',
      description_de: 'El polo loco ist ein Jump and Run-Spiel, das auf objektorientierter Programmierung basiert.',
      image: 'pollo-loco.png',
      github: 'https://github.com/vi-rgaigl/el-pollo-loco',
      link: 'https://regina-gaigl.developerakademie.net/el-pollo-loco.net',
      technologies: 'HTML | CSS | JavaScript',
      learned_en: 'I learned how to use object-oriented programming to create a game.',
      learned_de: 'Ich habe gelernt, wie ich objektorientierte Programmierung verwende, um ein Spiel zu erstellen.'
    }
  ];

}
