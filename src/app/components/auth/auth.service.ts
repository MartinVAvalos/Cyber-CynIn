// import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FireService } from '../services/fire.service';

@Injectable()
export class AuthService {

    token: string;
  
    };

    loginUser(email: string, password: string) {
        // firebase.auth().signInWithEmailAndPassword(email, password)
        // .then(
        //     response => {
        //         // implement tokens
        //         this.router.navigate(['/home']);
        //     }
        // )
        // .catch(
        //   error => console.log("Error: User failed to sign in \n" + error)
        // );
    };

    

    // getUID() {
    //     return firebase.auth().currentUser.uid;
    // };

    logOut() {
        
    }

    setUID() {

    }

    // getToken() {

    // }
}