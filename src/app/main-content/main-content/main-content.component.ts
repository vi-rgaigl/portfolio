import { Component} from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { MyWorkComponent } from '../my-work/my-work.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { NewHorizontalScrollDirective } from '../../new-horizontal-scroll.directive';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HomeComponent,
    WhyMeComponent,
    SkillsComponent,
    MyWorkComponent,
    ContactMeComponent,
    NewHorizontalScrollDirective,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent  {

}
