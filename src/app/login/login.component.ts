import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';


import { Users } from 'Users';

import { UsersService } from '../../app/users.service';
import { longStackSupport } from 'q';

interface myData {

  success: boolean,
  message: string
}


@Component({
  selector: 'app-login',
  // template: `
  //   <p>
  //     login works!
  //   </p>
  // `,

  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public users: Users[] = [];

 // isLoggedIn$: Observable<boolean>;
  isLoggedIn$: boolean;
  isL: Observable<boolean>;
  is: boolean;

  private loggedInStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  

  constructor(private usersService: UsersService, private httpClient: HttpClient, private router: Router) { 


   // this.usersService.logout();

    this.loggedInStatus.subscribe ( value => {

       this.isLoggedIn$ = value;
      // this.is = value[0].is;
    });


     


   //  this.usersService.loggedInStatus.next(true);
  }


  get isLoggedIn() {

    return this.loggedInStatus.asObservable();
  }


  ngOnInit() {

   // this.logout();

 //  this.usersService.logout();

   // this.isLoggedIn$ = this.isLoggedIn;

    this.isL = this.isLoggedIn$[0];

    console.log("login component - getIsLoggedIn" + this.isL);
    console.log("login component - is" + this.isLoggedIn$);
  }

  userNickname:string = "";
  userPassword:string = "";
  // loginResult:string = "";
  // loginresult:string = "";

 // result:string = "";
  result: boolean;
  loggedin: boolean;
  userNickName: string = "";
  lresult:string = "";


  lOgin(userNickname:string, userPassword:string):void {
    // console.log("id" + id);
    console.log("inadd - userNickName" + userNickname);
    console.log("inadd - userPassword" + userPassword);


    this.usersService.loginUser({  userNickname, userPassword } as Users)
    .subscribe(user => {

         this.users.push(user);

    });
    
    this.loGin();
  }



  loGin() {

    console.log("loGin");

   return this.httpClient.get('http://localhost:8080/api/login-user-result')
 //   this.httpClient.get('http://localhost:8080/api/loginuserresult')
    .subscribe(

      (data:any[]) => {


        if (data.length) {

         // this.loginResult = data[1].loginResult;
         this.result = data[0].result;
         this.userNickName = data[0].userNickName;
         // this.loginresult = this.loginResult;
       //  this.lresult = this.result;
          console.log("loginResult" + this.result);
          console.log("usernickname" + this.userNickName);


          //if (this.result == 'OK') {
            if (this.result) {

             // localStorage.setItem('currentUser', JSON.stringify(this.userNickName));
             // this.router.navigate(['/homepage']);
              this.router.navigate(['/homepage']);
             // this.router.navigate(['/']);
             // this.users.setLoggedIn(true);
              this.usersService.setLoggedIn(true);
              this.loggedInStatus.next(true);
              console.log("OK");
          } else {
             console.log("BAD");
          }

          localStorage.setItem('currentUser', JSON.stringify(this.userNickName));
          this.usersService.setLoggedIn(true);
        }

        // if (data.length) {

        //   this.result = data[0].result;
          
        //   this.lresult = this.result;

        //   if (this.lresult == "YES") {

        //     console.log("OK");

        //   }
          
        // } else {

        //   console.log("NO");
        // }


          return data;
      }
    )

  }
  

  logout() {

    localStorage.removeItem('currentUser');
    this.loggedInStatus.next(false);
  }


  
  




}
