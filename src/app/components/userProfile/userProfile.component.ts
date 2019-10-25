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
  jar: number = 0;
  timeforToday: number=0;


  constructor(
    private fire: FireService,
    private useServ: UserService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    

  }

  onStartClock() {
    let time = this.createClock();


    this.fire.getfromServers()
      .subscribe(
        (server: User) => {
          this.user = server;
          this.user.timeIn = time;
          this.fire.storeServers(this.user)
            .subscribe(
              (response) => {
                console.log("time in saved");
                this.router.navigate(['/home']);
              },

              (error) => console.log("problem when saving timeIn" + error)
            );
        },
        (error) => console.log("Problem getting your users from firebase error type: =>  " + error)
      );

  }

  createClock() {
    this.startClock = Moment(new Date());
    let temp = Number(this.startClock.format("HHmm"));

    return temp;
  }

  onEndClock() { // click event 

    let time2 = this.createClock();


    this.fire.getfromServers()
      .subscribe(
        (server: User) => {
          this.user = server;
          // finding the difference in time

          this.timeforToday = time2 - Number(this.user.timeIn);

          console.log("checking if total time is right "+this.timeforToday+ " also type "+typeof(this.timeforToday));


          // up to here it works
          

           this.jar = this.user.totalTime;

          console.log("checking if jar is working "+this.jar+ " also type "+typeof(this.jar));

          this.user.totalTime = this.jar + this.timeforToday; 

        

          // times 100 to move decimal point
          // totalTime needs to be saved

          this.fire.storeServers(this.user)
            .subscribe(
              (response) => {
                console.log(this.user.totalTime + " totalTime saved");
              //  time2=undefined;

                this.router.navigate(['/home']);
              },

              (error) => console.log("problem when saving timeout" + error)
            );
        },
        (error) => console.log("Problem getting your users from firebase error type: =>  " + error)
      );


  }


}




