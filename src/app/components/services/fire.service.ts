import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Server } from 'selenium-webdriver/safari';
import {HttpClientModule} from '@angular/common/http'
import { database } from 'firebase';
// import {AuthService} from './../components/auth/auth.service';
import 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class FireService {
  url:string='https://cyber-cynin.firebaseio.com/';
  
    token: string = "1"
    constructor(
      private http: Http,
      private user: User,
      private uidFromUser: AuthService
      ) {}

    storeServers(servers: any){
      // const token = this.uidFromUser.getToken()

       return this.http.put(this.url+ this.uidFromUser.getUID() +'/data.json',servers);

    }
    getlist(){
      
      return this.http.get(this.url+ this.uidFromUser.getUID() +'/data.json')
      // .map(
      //     (response: Response) => {
      //       const data = response.json();
      //       return data;
      //     }
      // )
      .pipe(map((response: any) => {
          response.json()
          .catch(
            (error: Response) => {
              return Observable.throw(console.log(Response));
            }
          );
        }
      ))
    }

  

}
