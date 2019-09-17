import {
  Directive,
  ElementRef,
  Output,
  HostListener,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  @Output()
  public clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.clickOutside.emit({
        isClickedOutside: true,
        elementRef: targetElement,
      });
    }
  }

  constructor(private elementRef: ElementRef) {}
}
