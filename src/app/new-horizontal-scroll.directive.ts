import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNewHorizontalScroll]',
  standalone: true
})
export class NewHorizontalScrollDirective {

  private isMobile: boolean = false;
  private wheelListener: (() => void) | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.checkScreenWidth();
    if (!this.isMobile) {
      this.horizontalWheelListener();
      if (this.isInsideLegalNotice()) {
        this.removeWheelListener();
      }    
    }
  }

  ngOnDestroy() {
    this.removeWheelListener();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenWidth();
    if (!this.isMobile) {
      this.horizontalWheelListener();
      if (this.isInsideLegalNotice()) {
        this.removeWheelListener();
      }    
    }
    else {   
      this.removeWheelListener();
    }
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth < 980;
    // console.log('isMobile', this.isMobile);
  }

  onScrollLeft(event: WheelEvent) {
    event.preventDefault();
    this.el.nativeElement.scrollLeft += event.deltaY * 2;
  }

  private horizontalWheelListener() {
    this.wheelListener = this.renderer.listen(this.el.nativeElement, 'wheel', this.onScrollLeft.bind(this));
  }

  private removeWheelListener() {
    if (this.wheelListener) {
      this.wheelListener();
      this.wheelListener = null;
    }
  }

  private isInsideLegalNotice(): boolean {
    console.log('isInsideLegalNotice detected');
    return this.el.nativeElement.closest('app-legal-notice') !== null;
  }
}
