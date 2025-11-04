import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from './user.model';

// type UserModel = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: false,
})
export class User {
  @Input({ required: true }) user!: UserModel;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
