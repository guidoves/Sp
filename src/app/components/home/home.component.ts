import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Message } from 'primeng/components/common/api';
import { LoginService } from 'src/app/services/login.services';

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

  constructor(private _modalService: BsModalService, private _login: LoginService) {
      this.user = localStorage.getItem('user_name');
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
     return user;
  }



}
