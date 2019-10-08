import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FireService } from '../../services/fire.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  htmlEmail: string;
  htmlFName: string;
  htmlLName: string;
  htmlStudentID: string;
  htmlPassword: string;

  
  constructor(
    // private user: User,
    private fire: FireService,
    private auth: AuthService,
    private router: Router,

  }

  ngOnInit() {
    
   
  }

  onSignup() {

}
 

begin(){
  console.log("starting");
  this.fire.storeServers(this.user)
  .subscribe(
    (response) =>{
      console.log("save complete!");
      this.router.navigate(['/login']);
    },
    (error) =>console.log(error)
    );
}

getNewInfo() {
  this.user ={
    email:this.htmlEmail,
    studentID:this.htmlStudentID,
    firstName:this.htmlFName,
    lastName:this.htmlLName,
  }
}

}