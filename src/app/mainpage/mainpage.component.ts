import { Component, OnInit } from '@angular/core';

import { Users } from 'Users';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  // template: `
  //   <p>
  //     mainpage works!
  //   </p>
  // `,
  templateUrl: './mainpage.component.html',
  styles: []
})
export class MainpageComponent implements OnInit {

  currentUser: Users;

  currentuser: boolean;
  cuser:boolean;

 // isLoggedIn$: Observable<boolean>;
 // isLoggedIn$: boolean;
    result: boolean;
  isLoggedIn$: boolean;
  isLogged: boolean;
  success: boolean;
  userNickname: string;
  is: boolean;

  constructor(private usersService: UsersService, private router: Router) { 


    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // this.usersService.isLoggedIn.subscribe( value => {

    //  // this.isLoggedIn$ = value; //it was here
    //  this.result = value;
    //  // this.is = value[0].is;

    //  // this.isLoggedIn$ = true;
    //  //this.result = false;
    // })

    this.usersService._isLoggedIn.subscribe(

      (isLoggedIn$: boolean) => this.isLoggedIn$ = isLoggedIn$
    )


    this.usersService.result().subscribe( 

        
      (data:any[]) => {


        if (data.length) {

         // this.loginResult = data[1].loginResult;
        // this.result = data[0].result;
        // this.isLoggedIn$ = data[0].isLoggedIn; //it was here
         this.result = data[0].result;
        // this.userNickName = data[0].userNickName;
         // this.loginresult = this.loginResult;
       //  this.lresult = this.result;
       // this.result = false;

         this.currentuser = this.result;


          console.log("main page isLoggedIn" + this.result);
          console.log("main page currentUser" + this.currentuser);
         // console.log("usernickname" + this.userNickName);


          //if (this.result == 'OK') {
            if (this.result) {

             // localStorage.setItem('currentUser', JSON.stringify(this.userNickName));
              this.router.navigate(['/homepage']);
//              this.router.navigate(['/homepage']);
             // this.users.setLoggedIn(true);
//              this.usersService.setLoggedIn(true);
//              this.loggedInStatus.next(true);
              console.log("OK");
          } else {
             console.log("BAD");
          }

//          localStorage.setItem('currentUser', JSON.stringify(this.userNickName));
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








   // )

  }

  ngOnInit() {

//    this.isLoggedIn$ = this.usersService.isLoggedIn;
   // this.userNickname = this.isLoggedIn$[0].userNickname;
    console.log("mainpage component");
    console.log("current user in mainpage component" + this.currentUser);

    this.cuser = this.cUser();
   // location.reload();
    console.log("mainpage component");
    console.log("cuser in mainpage component" + this.cuser);

    console.log("mainpage component");
   // console.log("isLoggedIn in mainpage component" + this.isLoggedIn$); //it was here
    console.log("isLoggedIn in mainpage component" + this.result);

   // console.log("mainpage component");
   // console.log("is in mainpage component" + this.is);
   // console.log("isLoggedIn in mainpage component" + this.isLogged);
   //console.log("isLoggedIn in mainpage component" + this.userNickname);
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

}
