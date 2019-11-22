import { Component, OnInit } from '@angular/core';
import { OmniService } from '../services/omni.service';
import { FireService } from '../services/fire.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  Display:string[];

  constructor(
    private displayUsers:OmniService,
    private fire: FireService

  ) { 
   this.displayUsers.dummy();
   this.Display=[];
  }

  ngOnInit() {
    this.populateUsers();

    // if(this.displayUsers.omni.nameAnTimeArray.length>0){
    //   this.Display=this.displayUsers.omni.nameAnTimeArray;

    // }
    // else{
    //   this.Display.push(null);
    // }
  }

  populateUsers() {
    this.fire.getOmni()
    .subscribe(
      (omniDisplayUsers) => {
        console.log("Hello World \n" + omniDisplayUsers)
        this.Display = omniDisplayUsers.nameAnTimeArray;
        return true;
      }
    )
  }

}
