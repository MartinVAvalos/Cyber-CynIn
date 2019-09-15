import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
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
            response => {
                // implement tokens
                this.router.navigate(['/home']);
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

    // getToken() {

    // }
}