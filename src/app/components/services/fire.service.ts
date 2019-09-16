import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// import 


import {Observable} from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable()
export class FireService{
  url:string='https://cyber-cynin.firebaseio.com/';
  
  constructor(
    private http: Http,
    private uidFromUser: AuthService
    ) {}

  storeOnServers(servers: any){
    
     return this.http.put(this.url+ this.uidFromUser.getUID() +'/data.json',servers);

  }
  getfromServers(){
    
    return this.http.get(this.url+ this.uidFromUser.getUID() +'/data.json')
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