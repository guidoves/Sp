import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() answer: EventEmitter<any>;

  form: FormGroup;

  constructor() {

      this.answer = new EventEmitter();

      this.form = new FormGroup(
          {
            'name': new FormControl('', Validators.required),
            'email': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required),
            'profile': new FormControl('', Validators.required)
          }
      );

   }

  ngOnInit() {
  }

  logUser() {
    const body = this.form.value;
    const data = {
       'user' : body.name,
       'password' : body.password,
       'email' : body.email,
       'profile' : body.profile
    };
    this.answer.emit(data);
  }


  testFree() {
    this.form.get('name').setValue('juan');
    this.form.get('email').setValue('juan@utn.com');
    this.form.get('password').setValue('1234');
    this.form.get('profile').setValue('free');
}

testNormal() {
  this.form.get('name').setValue('pablo');
  this.form.get('email').setValue('pablo@utn.com');
  this.form.get('password').setValue('12345678');
  this.form.get('profile').setValue('normal');
}

testProfesional() {
  this.form.get('name').setValue('martin');
  this.form.get('email').setValue('martin@utn.com');
  this.form.get('password').setValue('profeprofe');
  this.form.get('profile').setValue('profesional');
}

}
