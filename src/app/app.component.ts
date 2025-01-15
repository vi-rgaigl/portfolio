import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { TranslocoModule } from '@jsverse/transloco';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    HeaderComponent,
    TranslocoModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Regina Gaigl';

  mouseDown = false;

  startX: any;

  scrollLeft: any;

  @ViewChild('drag') slider: ElementRef | undefined;

  startDragging(e: MouseEvent, flag: boolean) {
    this.mouseDown = false;
    if (this.slider) {
      this.startX = e.pageX - this.slider.nativeElement.offsetLeft;
      this.scrollLeft = this.slider.nativeElement.scrollLeft;
    }
  }

  stopDragging(e: MouseEvent, flag: boolean) {
    this.mouseDown = false;
  }

  moveEvent(e: MouseEvent) {
    e.preventDefault();
    if (!this.mouseDown) {
      return;
    }
    if (this.slider) {
      const x = e.pageX - this.slider.nativeElement.offsetLeft;
      const scroll = x - this.startX;
      this.slider.nativeElement.scrollLeft = this.scrollLeft - scroll;
    }
  }
}
