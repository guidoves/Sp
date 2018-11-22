import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appSexo]'
})
export class SexoDirective implements OnInit {

  @Input('appSexo') sexo: string;

  constructor( private element: ElementRef ) {

      if (this.sexo === 'masculino') {
        element.nativeElement.style.backgroundColor = 'blue';
      } else {
        element.nativeElement.style.backgroundColor = 'pink';
      }

   }

   ngOnInit() {
      if (this.sexo === 'masculino') {
        this.element.nativeElement.style.backgroundColor = 'blue';
      } else {
        this.element.nativeElement.style.backgroundColor = 'pink';
      }
   }

}
