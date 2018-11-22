import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSexo]'
})
export class SexoDirective {

  @Input('appSexo') sexo;

  constructor( private element: ElementRef ) {

      if (this.sexo = 'masculino') {
        element.nativeElement.style.backgroundColor = 'blue';
      } else {
        element.nativeElement.style.backgroundColor = 'pink';
      }

   }

}
