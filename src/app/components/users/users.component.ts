import { Component, OnInit } from '@angular/core';
import { OmniService } from '../services/omni.service';
import { FireService } from '../services/fire.service';
import { Omni } from '../models/Omni';

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

  }

  populateUsers() {
    this.fire.getOmni()
    .subscribe((omniDisplayUsers:Omni) => {
      
        if(omniDisplayUsers.nameAnTimeArray===null || omniDisplayUsers.nameAnTimeArray.length===0){
          omniDisplayUsers.nameAnTimeArray=[];
          this.Display = omniDisplayUsers.nameAnTimeArray;
          console.log("Im in the if block");
          return true;
        }
        else{
          console.log("Im in the else block");
          this.Display = omniDisplayUsers.nameAnTimeArray;
          return true;
        }
       
      }
    )
  }

}
