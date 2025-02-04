import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNewHorizontalScroll]',
  standalone: true
})
export class NewHorizontalScrollDirective {

  private isMobile: boolean = false;
  private isMainContent: boolean = false;
  private isLegalNotice: boolean = false;
  private wheelListener: (() => void) | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.checkScreenWidth();
    this.isInsideMainContent();
    this.isInsideLegalNotice();
    if (!this.isMobile && this.isMainContent && !this.isLegalNotice) {
      this.horizontalWheelListener(); 
    }
  }

  ngOnDestroy() {
    this.removeWheelListener();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenWidth();
    this.isInsideMainContent();
    this.isInsideLegalNotice();
    if (!this.isMobile && this.isMainContent && !this.isLegalNotice) {
      this.horizontalWheelListener(); 
    } 
    else {   
      this.removeWheelListener();
    }
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth < 980;
    // console.log('isMobile', this.isMobile);
  }

  isInsideMainContent() {
    this.isMainContent = this.el.nativeElement.closest('.main-content') !== null;
    // console.log('main-content: ' , this.isMainContent);
  }

  isInsideLegalNotice() {
    this.isLegalNotice = this.el.nativeElement.closest('.legal-notice') !== null;
    // console.log('legal-notice: ' , this.isLegalNotice);
  }

  onScrollLeft(event: WheelEvent) {
    event.preventDefault();
    this.el.nativeElement.scrollLeft += event.deltaY * 4;
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


}
