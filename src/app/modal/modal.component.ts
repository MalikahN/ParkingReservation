import { Component, OnInit, Input } from '@angular/core';

import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { User } from '../user';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // users = USERS;
  // selectedUser?: User;
  selectedUser: User = { id: -1, name: 'default value', PhoneNumber: -1, Address: '' };

  constructor(public modalRef: MdbModalRef<ModalComponent>) {
  }

  ngOnInit(): void {

  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
