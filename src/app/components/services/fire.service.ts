import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/User';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FireService {
  url: string = 'https://cyber-cynin.firebaseio.com/';



  constructor(
    private http: Http,
    private uidFromUser: AuthService,

  ) {



  }

  storeServers(servers: User) {
    //this.uidFromUser.getUID() this goes between url and /data.json
  return this.http.put(this.url + this.uidFromUser.getUID() + '/data.json', servers);

  }
  getfromServers() {
    //this.uidFromUser.getUID() this goes between url and /data.json
    return this.http.get(this.url + this.uidFromUser.getUID() + '/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw(console.log("something wrong with fetching data error => " + Response));
        }
      );
  }



}
