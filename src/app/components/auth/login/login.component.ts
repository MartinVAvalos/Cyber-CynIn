import { Component, OnInit } from '@angular/core';

import { FireService } from '../../services/fire.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User;
  htmlEmail: string;
  htmlPassword: string;
  
  constructor(
    private fire: FireService,
    private auth: AuthService,
    private userServ:UserService,
    private router: Router
  ) {
    this.user=this.userServ.dummyModel();
  }

  ngOnInit() {
  }

  onLogin() {
    // this.auth.loginUser(this.htmlEmail, this.htmlPassword);
    
    //Login through firebase
    this.auth.loginUser(this.htmlEmail, this.htmlPassword);
  }
  

}
