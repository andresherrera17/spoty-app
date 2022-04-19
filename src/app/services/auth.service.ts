import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser = {} as IUser;

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient
  ) {
    this.getUser();
  }

  login() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  getUser() {
    return this.afAuth.authState.subscribe(user => {
      if (!user) {
        return;
      }
      this.user.uid = user.uid;
      this.user.nombre = user.displayName;
      this.user.email = user.email;
    });
  }

  getTokenSpotify() {
  }

  logout() {
    this.user = {} as IUser;
    return this.afAuth.signOut();
  }

}
