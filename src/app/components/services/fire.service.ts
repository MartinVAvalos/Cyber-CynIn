import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import {Observable} from 'rxjs';
// import { AuthService } from '../auth/auth.service';

import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AuthService } from '../auth/auth.service';
import { Key } from 'protractor';
import { User } from '../models/User';


@Injectable()
export class FireService{
  url:string='https://cyber-cynin.firebaseio.com/';
  key:string='1000';


  constructor(
    private http: Http,
    private uidFromUser: AuthService,
   
    ) {

   

    }

    storeServers(servers: User){
    //this.uidFromUser.getUID() this goes between url and /data.json
     return this.http.put(this.url+this.uidFromUser.getUID()+'/data.json',servers);

  }
  getfromServers(){
     //this.uidFromUser.getUID() this goes between url and /data.json
    return this.http.get(this.url+'/data.json')
    .pipe(map((response: Response) => {
      const data = response.json();
      return data
        
      .catch(
        (error: Response) => {
          return Observable.throw(console.log(Response));
        }
      );
      }
    ))
  }



}