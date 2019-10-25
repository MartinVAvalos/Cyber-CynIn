import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FireService } from '../../services/fire.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: User;

  htmlEmail: string;
  htmlFName: string;
  htmlLName: string;
  htmlStudentID: string;
  htmlPassword: string;

  constructor(
    private fire: FireService,
    private auth: AuthService,
    private router: Router,
    public userServ: UserService
  ) {
    this.user = userServ.dummyModel(this.user);
    // initialize variables then use them


  }

  ngOnInit() {


  }

  onSignup() {

    this.auth.signupUser(this.htmlEmail, this.htmlPassword)

    // run after promise
    setTimeout(() => {
      this.getNewInfo();
      this.begin();
    }, 1000);

  }


  begin() {
    console.log("starting");
    this.fire.storeServers(this.user)
      .subscribe(
        (response) => {
          console.log("save complete!");
          this.router.navigate(['/login']);
        },
        (error) => console.log(error)
      );
  }

  getNewInfo() {

    this.user.email = this.htmlEmail;
    this.user.studentID = this.htmlStudentID;
    this.user.firstName = this.htmlFName;
    this.user.lastName = this.htmlLName;
  }

}