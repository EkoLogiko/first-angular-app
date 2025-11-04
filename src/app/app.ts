import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false,
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(u => u.id == this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    console.log('Selected user with id ' + id);
    this.selectedUserId = id;
  }
}
