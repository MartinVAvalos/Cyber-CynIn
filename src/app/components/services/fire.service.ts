import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';


import {Observable} from 'rxjs';
// import { AuthService } from '../auth/auth.service';

import { map } from 'rxjs/operators';
import { User } from '../models/user';
// import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable()
export class FireService{
  url:string='https://cyber-cynin.firebaseio.com/';
  
  constructor(
    private http: Http
    ) {

    }

  storeOnServers(servers: any){
    //this.uidFromUser.getUID() this goes between url and /data.json
    console.log(typeof(servers));
     return this.http.put(this.url +'/data.json', servers);

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

  signUp(user: User, password: string) {
        firebase.auth().createUserWithEmailAndPassword(user.email, password);
        this.storeOnServers(user);
  }

  getUID() {
    return firebase.auth().currentUser.uid;
  };

}