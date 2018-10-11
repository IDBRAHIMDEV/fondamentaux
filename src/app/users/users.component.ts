import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers() {
    this.userService.getUsers().subscribe(users => {
       this.users = users.json();
    })
  }

}
