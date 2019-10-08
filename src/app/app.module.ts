import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FixTimeComponent } from './components/fix-time/fix-time.component';
import { SuperProfileComponent } from './components/super-profile/super-profile.component';
import { FireService } from './components/services/fire.service';
import { AuthService } from './components/auth/auth.service';
import { UserService } from './components/services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    UserProfileComponent,
    SignUpComponent,
    LoginComponent,
    FixTimeComponent,
    SuperProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [FireService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
