import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FireService } from '../services/fire.service';
import { User } from '../models/User';


@Injectable()
export class AuthService {

    token: string;
    constructor(
      
        private router: Router) {           

    };

   // studentID: string, fName: string, lName: string GOES IN MEthod
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch (
            error => console.log("problem while creating User "+error)
        );
    };

    loginUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
                // implement tokens
                //Future: fix-time~ admin needed
                this.router.navigate(['/userProfile']);
            }
        )
        .catch(
          error => console.log("Error: User failed to sign in \n" + error)
        );
    };

    

    getUID() {
        return firebase.auth().currentUser.uid;

    };

    logOut() {
        
    }

    setUID() {

    }


}