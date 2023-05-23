import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = USERS;
  selectedUser?: User;

  modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor(private modalService: MdbModalService) { }
  ngOnInit(): void {

  }

  onSelect(user: User): void {
    console.log(user);
    this.selectedUser = user;
  }

  openModal(user: User): void {
    // this.selectedUser = user;
    this.modalRef = this.modalService.open(ModalComponent, {
      data: { selectedUser: user}
    });
  }
}