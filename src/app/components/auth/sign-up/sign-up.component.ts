import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FireService } from '../../services/fire.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

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
    // private user: User,
    private fire: FireService,
    private auth: AuthService,
    private router: Router,
    private userService: UserService
  ) { 
    this.user = this.userService.model()
  }

  ngOnInit() {
  }

  onSignup() {
    this.user.email = this.htmlEmail;
    this.user.firstName = this.htmlFName;
    this.user.lastName = this.htmlLName;
    this.user.studentID = this.htmlStudentID;
    console.log("hello " + this.user.email);
    this.auth.signupUser(this.user, this.htmlPassword);

    // push form variable onto fireserve service
    // this.fire.storeOnServers

    //navigate page router.route
    this.router.navigate(['/login']);
  }

}
