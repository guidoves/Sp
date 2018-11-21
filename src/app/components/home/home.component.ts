import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user;

  modal: BsModalRef;

  constructor(private _modalService: BsModalService) {
      this.user = localStorage.getItem('user_name');
  }

  openModal(template: TemplateRef<any>) {
    this.modal = this._modalService.show(template, { ignoreBackdropClick: true });
  }

  ngOnInit() {
  }

}
