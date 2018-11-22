import { UserServices } from './../../services/user.services';
import { Component, OnInit, TemplateRef, EventEmitter, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Message } from 'primeng/components/common/api';
import { LoginService } from 'src/app/services/login.services';
import { Router } from '@angular/router';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user;

  modal: BsModalRef;

  services = [];

  msgs: Message[] = [];

  @Output() outuser: EventEmitter<any>;

  constructor(private _router: Router, private _modalService: BsModalService, private _login: LoginService, private _user: UserServices) {
      this.user = localStorage.getItem('user_name');
      this.outuser = new EventEmitter();
  }

  openModal(template: TemplateRef<any>) {
    this.modal = this._modalService.show(template, { ignoreBackdropClick: true });
  }

  ngOnInit() {
  }

  newService(service: any) {
    this.services.push(service);
    this.modal.hide();
  }

  newUser(user: any) {
     // console.log(user);

    this._user.newUser(user)
    .then((es => {
      this.modal.hide();
      this.outuser.emit(user);
    }));
  }



}
