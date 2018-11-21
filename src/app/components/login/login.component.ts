import { LoginService } from './../../services/login.services';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msgs: Message[] = [];

  constructor(private _login: LoginService) { }

  ngOnInit() {
  }


  showError() {
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: 'Usuario o contraseña incorrectos'});
  }

  login(data: any) {
      this._login.login(data.user, data.password, data.email, data.profile);
  }

  

}
