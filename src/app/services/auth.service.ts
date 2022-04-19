import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
import { IUser } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

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
    let body = new URLSearchParams();
    body.set('grant_type', environment.spotify.grant_type);
    body.set('client_id', environment.spotify.client_id);
    body.set('client_secret', environment.spotify.cliente_secret);

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post(environment.spotify.urlToken, body, { headers })
      .pipe(map((data: any) => data)).subscribe(data => {
        sessionStorage.setItem('token', data?.access_token);
      })
  }

  logout() {
    this.user = {} as IUser;
    return this.afAuth.signOut();
  }

}
