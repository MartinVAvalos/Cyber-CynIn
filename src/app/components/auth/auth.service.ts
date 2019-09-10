import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    value: string;
    token: string;
    constructor(private router: Router) {

    };

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch (
            error => console.log(error)
        );
    };

    loginUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(

        )
        .catch(
          error => console.log("Error: User failed to sign in \n" + error)
        );
    };

    // getUID() {
    
    // };

    logOut() {
        
    }

    setUID() {

    }

    // getToken() {

    // }
}