import { Injectable } from '@angular/core';
import { userInfo } from 'os';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User;

  constructor() {
   

   }

  dummyModel(user:User){
    
    
    user ={
      email:'blank',
      studentID:'999',
      firstName:'eman',
      lastName:'fonseca',
      
    }
    return user;
  }
}
