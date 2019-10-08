import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';


import {Observable} from 'rxjs';
// import { AuthService } from '../auth/auth.service';

import { map } from 'rxjs/operators';


@Injectable()
export class FireService{
  url:string='https://cyber-cynin.firebaseio.com/';
  key:string='1000';


  constructor(


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