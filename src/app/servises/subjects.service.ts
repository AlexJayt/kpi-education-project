import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { StorageService } from './storage.service';
import { map } from 'rxjs/operators';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  questionsSubject = new BehaviorSubject(null);
  answersSubject = new BehaviorSubject(null);
  questions$ = this.questionsSubject.asObservable();
  answers$ = this.answersSubject.asObservable();
  selectedQuestion;

  constructor(private storage: StorageService) {
  }

  loadSubjects() {
    return this.storage.subjects.valueChanges();
  }

  loadLectures(subjectId) {
    return this.storage.lectures.valueChanges().pipe(
      map(data => (data as any[]).filter(lecture => lecture.subject === subjectId)),
    );
  }

  loadQuestions(lecture) {
    return this.storage.questions.valueChanges().pipe(
      map(data => (data as any[]).filter(q => q.lectureId === lecture)),
    ).subscribe(data => {
      this.questionsSubject.next(data);
    });
  }

  loadAnswers(questionId) {
    return this.storage.answers.valueChanges().pipe(
      map(data => (data as any[]).filter(a => a.questionId === questionId)),
    ).subscribe(data => {
      console.log(data);
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
      key: this.selectedQuestion.id + this.answersSubject.value.length.toString(),
      questionId: this.selectedQuestion.id,
      text,
      accepted: false,
    };

    this.storage.answers.set(this.selectedQuestion.id + this.answersSubject.value.length.toString(), answer);
  }

  sendQuestion(text, lectureId) {
    const question = {
      id: lectureId + this.questionsSubject.value.length.toString(),
      key: lectureId + this.questionsSubject.value.length.toString(),
      text,
      lectureId,
    };
    this.storage.questions.set(lectureId + this.questionsSubject.value.length.toString(), question);
  }

  toggle(answer: Answer) {
    answer.accepted = !answer.accepted;
    this.storage.answers.set(answer.id, answer);
  }
}
