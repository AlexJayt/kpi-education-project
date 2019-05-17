import { Component } from '@angular/core';
import { StorageService } from './servises/storage.service';
import { UsersService } from './servises/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private storage: StorageService, private users: UsersService) {
    this.storage.load();
    this.users.loadUser().subscribe();
  }
}
