import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-altaservicio',
  templateUrl: './altaservicio.component.html',
  styleUrls: ['./altaservicio.component.css']
})
export class AltaservicioComponent implements OnInit {

  @Output() answer: EventEmitter<any>;

  form: FormGroup;

  constructor() {
    this.answer = new EventEmitter();

    this.form = new FormGroup(
        {
          'name': new FormControl('', [Validators.required, Validators.minLength(1)]),
          'storage': new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,100}$')])
        }
    );

  }

  newServ() {
     const body = this.form.value;

      this.answer.emit(body);

  }

  ngOnInit() {
  }

}
