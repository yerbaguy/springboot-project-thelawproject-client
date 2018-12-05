import { Component, OnInit } from '@angular/core';

import { Users } from 'Users';

import { UsersService } from '../users.service';


@Component({
  selector: 'app-registration',
  // template: `
  //   <p>
  //     registration works!
  //   </p>
  // `,
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  public users: Users[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }


  userName:string = "";
  userSurname:string = "";
  userNickname:string = "";
  userEmail:string = "";
  userPassword:string = "";



 // add(id:number, userName:string, userSurname:string, userNickName:string, userEmail:string, userPassword:string):void {
  add(userName:string, userSurname:string, userNickname:string, userEmail:string, userPassword:string):void {
    // console.log("id" + id);
    console.log("inadd - userName" + userName);
    console.log("inadd - userSurname" + userSurname);
    console.log("inadd - userNickName" + userNickname);
    console.log("inadd - userEmail" + userEmail);
    console.log("inadd - userPassword" + userPassword);


    this.usersService.addUser({ userName, userSurname, userNickname, userEmail, userPassword } as Users)
    .subscribe(user => {

       this.users.push(user);

    });
    
  }


}
