import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CynIn';

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyAHTymSBBWgjUGtBper5R8X9c4ftd48KE4",
      authDomain: "cyber-cynin.firebaseapp.com",
      databaseURL: "https://cyber-cynin.firebaseio.com",
      projectId: "cyber-cynin",
      storageBucket: "",
      messagingSenderId: "112615274893",
      appId: "1:112615274893:web:6d67744b3d9f400d"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
