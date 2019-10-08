import { Component, OnInit } from '@angular/core';
import { FireService } from '../services/fire.service';
import { User } from '../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testString:string;
  user:User;
 

  constructor(
    private fire:FireService,
  ) {
    // this.testString="hello";
    // this.user.name="testName";
    // this.user.email="eman9997@yahoo.com";
   }

  ngOnInit() {
  }

  test(){
    this.fire.storeServers(this.user);
  }
}
