import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../../../../servises/users.service';

@Component({
  selector: 'app-base-navigation',
  templateUrl: './base-navigation.component.html',
  styleUrls: ['./base-navigation.component.css']
})
export class BaseNavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private users: UsersService) {
  }

  get user() {
    return this.users.user;
  }

  onLogout() {
    this.users.logOut();
  }

}
