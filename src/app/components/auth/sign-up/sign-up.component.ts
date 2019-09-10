import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  htmlEmail: String;
  htmlFName: String;
  htmlLName: String;
  htmlStudentID: String;
  htmlPassword: String;

  constructor(
    // private fire: FireserveServe
  ) { }

  ngOnInit() {
  }

  onSignup() {
    // inject fireserve service

    // push form variable onto fireserve service


    //navigate page router.route
  }

}
