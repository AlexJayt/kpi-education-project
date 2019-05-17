import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {


  private questionsSubject = new BehaviorSubject(null);
  private answersSubject = new BehaviorSubject(null);
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
      this.answersSubject.next(data);
    });
  }

  setSelectedQuestion(q) {
    this.selectedQuestion = q;
    this.loadAnswers(q.id);
  }

}
