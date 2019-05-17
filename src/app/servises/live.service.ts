import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { StorageService } from './storage.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Live } from '../models/live';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  private questionsSubject: BehaviorSubject<Question[]> = new BehaviorSubject(null);
  private answersSubject: BehaviorSubject<Answer[]> = new BehaviorSubject(null);
  questions$ = this.questionsSubject.asObservable();
  answers$ = this.answersSubject.asObservable();
  selectedQuestion;
  lecture: Live;

  constructor(private store: AngularFirestore, private db: AngularFireDatabase, private storage: StorageService) {
  }

  loadQuestions() {
    return this.storage.live.valueChanges().pipe(
      tap(data => this.lecture = data[0]),
      switchMap(() => this.storage.questions.valueChanges()),
      map(data => (data as any[]).filter(q => q.lectureId === this.lecture.lecture)),
    ).subscribe(data => {
      this.questionsSubject.next(data);
    });
  }

  loadAnswers(questionId) {
    return this.storage.answers.valueChanges().pipe(
      map(data => (data as any[]).filter(a => a.questionId === questionId)),
    ).subscribe(data => {
      this.answersSubject.next(data);
    });
  }

  setSelectedQuestion(q) {
    this.selectedQuestion = q;
    return this.loadAnswers(q.id);
  }

  sendAnswer(text) {
    const answer = {
      id: this.selectedQuestion.id + this.answersSubject.value.length.toString(),
      questionId: this.selectedQuestion.id,
      text,
      accepted: false,
    };

    this.storage.answers.set(this.selectedQuestion.id + this.answersSubject.value.length.toString(), answer);
  }

  sendQuestion(text) {
    const question = {
      id: this.lecture.lecture + this.questionsSubject.value.length.toString(),
      text,
      lectureId: this.lecture.lecture,
    };
    this.storage.questions.set(this.lecture.lecture + this.questionsSubject.value.length.toString(), question);
  }

  toggle(answer: Answer) {
    answer.accepted = !answer.accepted;
    this.storage.answers.set(answer.id, answer);
  }
}
