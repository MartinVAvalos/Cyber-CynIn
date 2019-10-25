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
  timeforToday: number = 0;
  display: string;
  display2: string;


  constructor(
    private fire: FireService,
    private useServ: UserService,
    private router: Router,
  ) {

  }

  ngOnInit() {

    this.fire.getfromServers()
      .subscribe( 
        (server: User) => {
          this.user = server;
          this.display=this.myconvert(this.user.totalTime);
          this.currentDisplay(this.user.timeIn);

        }

      )
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
      .subscribe( // loading user from fire service
        (server: User) => {
          this.user = server;
          // finding the difference in time

          this.timeforToday = time2 - Number(this.user.timeIn);

          this.jar = this.user.totalTime;
          this.user.totalTime = this.jar + this.timeforToday;
          this.user.timeIn=0;

          this.fire.storeServers(this.user)
            .subscribe(
              (response) => {
                console.log(this.user.totalTime + " totalTime saved");

                this.router.navigate(['/home']);
              },

              (error) => console.log("problem when saving timeout" + error)
            );
        },
        (error) => console.log("Problem getting your users from firebase error type: =>  " + error)
      );


  }

  myconvert(numTime:number):string{
    numTime=numTime/100;
    if(numTime >= 13){
      numTime=numTime-12;

      let mystring=numTime + " Hrs";
      mystring=mystring.replace('.',':');

      return mystring;
    }
    else{
      let mystring=numTime + " Hrs";
      mystring=mystring.replace('.',':');
      return mystring;
    }

  }
  truncateDecimals(number:number) {
    return Math[number < 0 ? 'ceil' : 'floor'](number);
};

  currentDisplay(timeIn: number) {
    let time3 = this.createClock(); //current time
    let totalTempHours = time3 - Number(this.user.timeIn);
    totalTempHours = this.truncateDecimals(totalTempHours)
    this.display2=this.myconvert(totalTempHours);
    

  }

}







  
     
    






