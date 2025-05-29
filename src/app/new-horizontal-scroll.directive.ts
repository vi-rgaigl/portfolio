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
  private isDragging: boolean = false;
  private startX: number = 0;
  private scrollLeft: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.checkScreenWidth();
    this.isInsideMainContent();
    this.isInsideLegalNotice();
    if (!this.isMobile && this.isMainContent && !this.isLegalNotice) {
      this.horizontalWheelListener(); 
      this.addDragListeners();
    }
  }

  ngOnDestroy() {
    this.removeWheelListener();
    this.removeDragListeners();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenWidth();
    this.isInsideMainContent();
    this.isInsideLegalNotice();
    if (!this.isMobile && this.isMainContent && !this.isLegalNotice) {
      this.horizontalWheelListener(); 
      this.addDragListeners();
    } 
    else {   
      this.removeWheelListener();
      this.removeDragListeners();
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

  onScrollRight(event: WheelEvent) {
    event.preventDefault();
    this.el.nativeElement.scrollRight -= event.deltaY * 4;
  }

  private horizontalWheelListener() {
    this.wheelListener = this.renderer.listen(this.el.nativeElement, 'wheel', this.onScrollLeft.bind(this));
    this.wheelListener = this.renderer.listen(this.el.nativeElement, 'wheel', this.onScrollRight.bind(this));
  }

  private removeWheelListener() {
    if (this.wheelListener) {
      this.wheelListener();
      this.wheelListener = null;
    }
  }

  private addDragListeners() {
    this.renderer.listen(this.el.nativeElement, 'mousedown', this.onMouseDown.bind(this));
    this.renderer.listen(this.el.nativeElement, 'mousemove', this.onMouseMove.bind(this));
    this.renderer.listen(this.el.nativeElement, 'mouseup', this.onMouseUp.bind(this));
    this.renderer.listen(this.el.nativeElement, 'mouseleave', this.onMouseUp.bind(this));
  }

  private removeDragListeners() {
    // No need to explicitly remove listeners here since Angular cleans up listeners automatically
  }

  private onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - this.el.nativeElement.offsetLeft;
    this.scrollLeft = this.el.nativeElement.scrollLeft;
  }

  private onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.el.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2; // Adjust the multiplier for sensitivity
    this.el.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  private onMouseUp() {
    this.isDragging = false;
  }

}
