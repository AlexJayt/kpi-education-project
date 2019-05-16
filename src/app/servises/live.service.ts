import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { StorageService } from './storage.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  private questionsSubject = new BehaviorSubject(null);
  private answersSubject = new BehaviorSubject(null);
  questions$ = this.questionsSubject.asObservable();
  answers$ = this.answersSubject.asObservable();
  selectedQuestion;
  lecture;

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
    this.loadAnswers(q.id);
  }

  sendAnswer(text) {
    const answer = {
      id: uuid(),
      questionId: this.selectedQuestion.id,
      text,
    };

    this.storage.answers.push(answer);
  }

  sendQuestion(text) {
    const question = {
      id: uuid(),
      text,
      lectureId: this.lecture.lecture,
    };
    this.storage.questions.push(question);
  }
}
