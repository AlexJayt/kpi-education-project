import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {
  }

  login(email, password) {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  register(email, password) {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  signOut() {
    return from(this.afAuth.auth.signOut().then());
  }
}
