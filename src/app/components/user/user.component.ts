import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { Name } from '../interfaces/name';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  
  public user:User = {};

  constructor() { }

  ngOnInit() {
    const name:Name = {
      lastName:"Tempest",
      firstName:"Rimuru",
      middleName:""
    };
    this.user.emailAddress = "rimuru.tempest@yopmail.com";
    this.user.password = "12345656756";
    this.user.mobileNo = "093412312234";
    this.user.name = name;
  }

  submit(){
     console.log(this.user);
  }

}
