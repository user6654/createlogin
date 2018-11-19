import { Component, OnInit, Input } from '@angular/core';

import { FormActionsService } from '../form-actions.service';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {
  @Input() users;

  users=[];
  password = [];
  selectedList = 'all';

  formService:FormActionsService;

  constructor(formService:FormActionsService) {
    this.formService = formService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm.value);
    this.formService.addUser(submittedForm.value.name, submittedForm.value.password);
  }

  getUsers() {
    this.users = this.formService.getUsers(this.selectedList);
    return this.users;
  }
}
