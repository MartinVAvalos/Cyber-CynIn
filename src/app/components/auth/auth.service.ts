// import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FireService } from '../services/fire.service';
import { User } from '../models/user';

@Injectable()
export class AuthService {
    token: string;
    
    constructor(
        private fireService: FireService,
        private router: Router) {

    };

    signupUser(user: User, password: string) {
        this.fireService.signUp(user, password);
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        // .then(
        //     () => {
        //         this.user.email = "eman9997@yahoo.com";
        //         this.user.studentID = "2000000";
        //         this.user.firstName = "eman";
        //         this.user.lastName = "Fonseca";
        //         this.user.isSuper = false;
        //         this.fire.storeOnServers(this.user);          
        //     }
        // )
        // .catch (
        //     error => console.log(error)
        // );
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