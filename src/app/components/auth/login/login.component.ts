import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  htmlEmail: string;
  htmlFName: string;
  htmlLName: string;
  htmlStudentID: string;
  htmlPassword: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin() {

    this.auth.loginUser(this.htmlEmail, this.htmlPassword);

    this.router.navigate(['/home']);
  }
  

}
