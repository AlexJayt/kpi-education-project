import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { StorageService } from './storage.service';
import { AuthorizationService } from './authorization.service';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;
  email: string = localStorage.getItem('email');
  users: User[];

  constructor(private storage: StorageService, private authorization: AuthorizationService, private router: Router) {
  }

  loadUser() {
    return this.storage.users.valueChanges().pipe(
      map(data => {
        this.users = data;
        this.findUser();
        return this.user;
      }),
    );
  }

  findUser() {
    this.user = this.users.find(user => user.mail === this.email);
    console.log(this.user);
  }

  createUser(name, mail, phone, password) {
    return this.authorization.register(mail, password).pipe(
      tap(() => {
        this.storage.users.push({
          isteacher: false,
          name,
          phone,
          mail,
          group: 'ti-51',
        });
        this.email = mail;
        this.router.navigate(['/app']);
        localStorage.setItem('email', mail);
      }),
    );
  }

  login(mail, password) {
    return this.authorization.login(mail, password).pipe(
      tap(() => {
        this.email = mail;
        this.findUser();
        this.router.navigate(['/app']);
        localStorage.setItem('email', mail);
      }),
    );
  }

  logOut() {
    localStorage.clear();
    this.user = null;
    this.email = null;
    this.router.navigate(['/login']);
  }

}
