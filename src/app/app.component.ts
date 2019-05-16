import { Component } from '@angular/core';
import { StorageService } from './servises/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private storage: StorageService) {
    this.storage.load();
  }
}
