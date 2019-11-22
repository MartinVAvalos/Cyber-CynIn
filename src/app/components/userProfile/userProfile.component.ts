import { Component, OnInit } from '@angular/core';
import * as Moment from 'moment';
import { FireService } from '../services/fire.service';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { OmniService } from '../services/omni.service';
import { Omni } from '../models/Omni';


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
    private homeInfo:OmniService
  ) {
    this.homeInfo.dummy();
  }

  ngOnInit() {

    this.fire.getfromServers()
      .subscribe(
        (server: User) => {
          this.user = server;
          this.display = this.myconvert(this.user.totalTime);
          this.currentDisplayingTotal(this.user.timeIn);

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
          this.homeStuff(time);
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
    let time2:number = this.createClock();

    this.fire.getfromServers()
      .subscribe( // loading user from fire service
        (server: User) => {
          this.user = server;
          // finding the difference in time
          
          this.timeforToday = time2 - Number(this.user.timeIn);
          // if negative then need supervisor


          this.jar = this.user.totalTime;
          this.user.totalTime = this.jar + this.timeforToday;
          this.user.timeIn = 0;

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

  myconvert(numTime: number): string {
    numTime = numTime / 100;
    if (numTime >= 13) {
      numTime = numTime - 12;

      let mystring = numTime + " Hrs";
      mystring = mystring.replace('.', ':');

      return mystring;
    }
    else {
      let mystring = numTime + " Hrs";
      mystring = mystring.replace('.', ':');
      return mystring;
    }

  }
  truncateDecimals(number: number) {
    return Math[number < 0 ? 'ceil' : 'floor'](number);
  };

  currentDisplayingTotal(timeIn: number) {

    let time3 = this.createClock(); //current time
    if(timeIn == 0){
      this.display2="Please Click Start Tracking";
    }
    else{
      let totalTempHours = time3 - Number(timeIn);
      totalTempHours = this.truncateDecimals(totalTempHours)
      this.display2 = this.myconvert(totalTempHours);
    }
  
  }

  sendingInfoToOmniFire(myomni:Omni){
    this.fire.OmniSaving(myomni)
    .subscribe(Data=>console.log("your omnni info has been saved : "+Data))
    
  }
  homeStuff(time){
    this.homeInfo.omni.nameAnTimeArray.push(this.user.firstName + "   "+ time.toString());
    this.sendingInfoToOmniFire(this.homeInfo.omni);
    return true;
  }

}
















