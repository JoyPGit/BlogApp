import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class BoldDirective {

  constructor(private elr :ElementRef) {
   }

   @Input('appHighlight') highlightColor: string;
   //Inside the directive the property is known as highlightColor. Outside the directive, 
   //where you bind to it, it's known as appHighlight

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('blue');
  }

  private highlight(color: string) {
    this.elr.nativeElement.style.backgroundColor = color;
  }
}
