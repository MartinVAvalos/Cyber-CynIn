import { Component, OnInit } from '@angular/core';
import * as Moment from 'moment';
import { FireService } from '../services/fire.service';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})
export class UserProfileComponent implements OnInit {

  startClock: any;
  user: User;

  constructor(
    private fire: FireService,
    private useServ: UserService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.user = this.useServ.dummyModel(this.user);
  }

  onStartClock() {
    let time = this.createClock();
    this.savingStartTime();

    this.fire.getfromServers()
      .subscribe(
        (server: User) => {
          this.user = server;
          // info is back now what
          this.user.timeIn = time;
          // time is now in user locally still need to push user
          this.fire.storeServers(this.user)
            .subscribe(
              (response) => {
                console.log("time in saved");
                this.router.navigate(['/home']);
              },

              (error) => console.log("problem when saving timeIn"+error)
            );
        },
        (error) => console.log("Problem getting your users from firebase error type: =>  " + error)
      );

  }
  savingStartTime() {
    this.fire.storeServers(this.startClock.format("HHmm"));
  }

  createClock() {
    this.startClock = Moment(new Date());
    let temp = Number(this.startClock.format("HHmm"));

    return temp;
  }


}
