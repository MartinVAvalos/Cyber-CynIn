import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {
  user: User;

  constructor() { 

  }

  model(){
    this.user={
      email: '',
      studentID: '',
      firstName: '',
      lastName: '',
      isSuper: false
    }
    return this.user;
  }
}
