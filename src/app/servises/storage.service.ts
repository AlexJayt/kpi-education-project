import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { User } from '../models/user';
import { Question } from '../models/question';
import { Lecture } from '../models/lecture';
import { Subject } from '../models/subject';
import { Answer } from '../models/answer';
import { Live } from '../models/live';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  group = 'ti-51';

  questions: AngularFireList<Question>;
  lectures: AngularFireList<Lecture>;
  subjects: AngularFireList<Subject>;
  answers: AngularFireList<Answer>;
  live: AngularFireList<Live>;
  users: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
  }

  load() {
    this.questions = this.db.list(`groups/${this.group}/questions`);
    this.lectures = this.db.list(`groups/${this.group}/lectures`);
    this.subjects = this.db.list(`groups/${this.group}/subjects`);
    this.answers = this.db.list(`groups/${this.group}/answers`);
    this.live = this.db.list(`groups/${this.group}/live`);
    this.users = this.db.list('users');
  }

}
