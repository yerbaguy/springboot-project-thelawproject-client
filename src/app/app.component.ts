import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import { Users } from 'Users';
import { UsersService } from './users.service';

import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';

import { LoginResult } from 'LoginResult';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springboot-project-thelawproject-client';


  public users: Users[] = [];

  result: boolean;
  userNickName: string;


  currentUser: Users;

  currentuser: boolean;
  cuser:boolean;


  isLoggedIn$: boolean;
  isL: Observable<boolean>;
  is: boolean;



  private loggedInStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  success: boolean;

  public loginresult: LoginResult[] = [];




  constructor(private usersService: UsersService, private router: Router, private httpClient: HttpClient) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
   // this.usersService.logout();

   // this.router.navigate(['/homepage']);


   this.loggedInStatus.subscribe ( value => {

    this.isLoggedIn$ = value;
   // this.is = value[0].is;
 });

    
  }



  get isLoggedIn() {

    return this.loggedInStatus.asObservable();
  }




  ngOnInit() {

   // this.loGin();


    this.router.navigate(['/']);



    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.loggedInStatus.subscribe ( value => {

      

      this.isLoggedIn$ = value;
       
     // this.is = value[0].is;
   });

   this.usersService._isLoggedIn.subscribe(

    (isLoggedIn$: boolean) => this.isLoggedIn$ = isLoggedIn$

   )
  




   // this.loGin();


  //   console.log("app component");
  //   console.log("current user in app component" + this.currentUser);

  //   this.cuser = this.cUser();
  //  // location.reload();
  //   console.log("app component");
  //   console.log("cuser in app component" + this.cuser);


   

  this.isL = this.isLoggedIn$[0];

    console.log("login component - getIsLoggedIn" + this.isL);
    console.log("login component - is" + this.isLoggedIn$);


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
          console.log ("isLoggedIn$" + this.isLoggedIn$);
          console.log("usernickname" + this.userNickName);


          //if (this.result == 'OK') {
            if (this.result) {
              
             // localStorage.setItem('currentUser', JSON.stringify(this.userNickName));
             // this.router.navigate(['/homepage']);
              this.router.navigate(['/']);
             // this.router.navigate(['/']);
             // this.users.setLoggedIn(true);
             // this.usersService.setLoggedIn(true);
             this.usersService.isLoggedIn = true;
              this.loggedInStatus.next(true);
              console.log("OK");
          } else {
             console.log("BAD");
          }

          localStorage.setItem('currentUser', JSON.stringify(this.userNickName));
         // this.usersService.setLoggedIn(true);
          this.usersService.isLoggedIn = true;
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





  loggedin() {

    this.usersService.isLoggedIn
  }


  cUser() {

    if (this.currentUser) {

             
       return this.currentuser = true; 
       
    } else {
    
            
      return this.currentuser = false;
      
    }
 }


 whichCUser() {

  if (this.cuser) {
    location.reload();
  } else {
    location.reload();
  }

 }


 onLogout(success:boolean) {

  // this.usersService.logout();

   success = false;

  console.log("logout component" + success);

  this.usersService.logout({ success } as LoginResult)
  .subscribe(loginResult => {

     this.loginresult.push(loginResult);

  });

 // this.usersService.logout;

 this.usersService.isLoggedIn = false;

  // this.router.navigate(['/']);
  // this.router.onSameUrlNavigation;

  this.router.navigate(['/']);

 }


  

}
