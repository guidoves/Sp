import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from './../../../../classes/User';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  @Output() answer: EventEmitter<any>;

  // @Input() user: User;
  // @Input() operation: string;

  constructor() {

    this.answer = new EventEmitter();

      this.form = new FormGroup(
          {
            'name': new FormControl('', Validators.required),
            'email': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required),
            'profile': new FormControl('', Validators.required),
            'sexo': new FormControl('', Validators.required)
          }
      );

  }

  newUser() {
    const body = this.form.value;
    const nwUser = new User();
    nwUser.name = body.name;
    nwUser.email = body.email;
    nwUser.password = body.password;
    nwUser.profile = body.profile;
    nwUser.sexo = body.sexo;

    this.answer.emit(nwUser);
  }

  ngOnInit() { }

}
