import { Component, OnInit } from '@angular/core';
import * as Moment from 'moment';
import { FireService } from '../services/fire.service';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
  startClock:any;
  user:User;

  constructor(
      private fire: FireService,
      private useServ: UserService
    ) {
      this.user=useServ.dummyModel(this.user);
  }

  ngOnInit() {
  }

  onStartClock() {
    let time= this.createClock();
    this.savingStartTime();

    this.fire.getfromServers().subscribe(
      (server:User)=>{
        this.user=server;
        console.log("old eman got :"+this.user);
      },
      (error)=> console.log("Problem getting your users from firebase error type: =>  "+error)
    );
    
  }
 savingStartTime() {
    this.fire.storeServers(this.startClock.format("HHmm"));
  }

  createClock(){
    this.startClock = Moment(new Date());
    let temp = Number(this.startClock.format("HHmm"));

    return temp;
  }
 

}
