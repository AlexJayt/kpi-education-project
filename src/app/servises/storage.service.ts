import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  group = 'ti-51';

  questions;
  lectures;
  subjects;
  answers;
  live;

  constructor(private db: AngularFireDatabase) {
  }

  load() {
    this.questions = this.db.list(`groups/${this.group}/questions`);
    this.lectures = this.db.list(`groups/${this.group}/lectures`);
    this.subjects = this.db.list(`groups/${this.group}/subjects`);
    this.answers = this.db.list(`groups/${this.group}/answers`);
    this.live = this.db.list(`groups/${this.group}/live`);
  }

}
