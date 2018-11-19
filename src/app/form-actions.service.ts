import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormActionsService {
  private users = [
    { name: 'Admin' , password: 'abc123' },
    { name: 'Assistant' , password: 'qwe123' }
  ];

  constructor() { }

  getUsers(selectedList) {
    if (selectedList === 'all') {
      return this.users.slice();
    }
  }

  addUser(name, password) {
    const newUser= {name: name, password: password};
    this.users.push(newUser);
  }
}
