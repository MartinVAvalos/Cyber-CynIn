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
    private fire: FireService,
    private auth: AuthService,
    private router: Router 
  ) { }

  ngOnInit() {
  }

  onSignup() {
    // inject fireserve service
    this.auth.signupUser(this.htmlEmail, this.htmlPassword);

    // push form variable onto fireserve service
    // this.fire.storeOnServers

    //navigate page router.route
    this.router.navigate(['/login']);
  }

}
