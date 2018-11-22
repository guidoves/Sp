import { Component } from '@angular/core';
import { LoginService } from './services/login.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nav;

  constructor(private _login: LoginService) {

    this.nav = true;

  }

  newUser(user: any) {
    this.nav = false;
    setTimeout(() => {
      this.nav = true;
    }, 1000);
  }

}
