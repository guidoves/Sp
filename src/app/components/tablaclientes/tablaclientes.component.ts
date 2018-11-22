import { UserServices } from './../../services/user.services';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../classes/User';

@Component({
  selector: 'app-tablaclientes',
  templateUrl: './tablaclientes.component.html',
  styleUrls: ['./tablaclientes.component.css']
})
export class TablaclientesComponent implements OnInit {

  users: User[];

  constructor(private _users: UserServices) {
      this._users.allUsers()
      .then( (res: any) => {
          this.users = res;
      });
   }

  ngOnInit() {
  }

}
