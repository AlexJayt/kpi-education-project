import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LiveService {
  questions = [
    {
      id: 'q_1',
      text: 'Tolerably earnestly middleton extremely distrusts she boy now not?',
      subjectId: 'sb_1',
    },
    {
      id: 'q_2',
      text: 'Barton waited twenty always repair in within we do.',
      subjectId: 'sb_1',
    },
    {
      id: 'q_3',
      text: 'An delighted offending curiosity my is dashwoods at. ' +
        'Boy prosperous increasing surrounded companions her nor advantages sufficient put. ' +
        'John on time down give meet help as of.',
      subjectId: 'sb_1',
    },
    {
      id: 'q_4',
      text: 'Case read they must it of cold that. ' +
        'Speaking trifling an to unpacked moderate debating learning. ' +
        'An particular contrasted he excellence favourable on. ',
      subjectId: 'sb_1',
    },
  ];

  answers = [
    {
      id: 'a_1',
      questionId: 'q_1',
      text: 'Hdsf sd sdfhjsd s sdgssd sdfsdfhgaowe aldsddfnbsreuu ;dfilhrgafres'
    },
  ];

  private questionsSubject = new BehaviorSubject(null);
  questions$ = this.questionsSubject.asObservable();
  private answersSubject = new BehaviorSubject(null);
  answers$ = this.answersSubject.asObservable();

  selectedQuestion;

  constructor(private store: AngularFirestore, private db: AngularFireDatabase) {
  }

  loadQuestions() {
    of(this.questions).subscribe(data => this.questionsSubject.next(data));
    // return this.store.collection('groups').snapshotChanges().subscribe(data => console.log(data));
    return this.db.list('/').valueChanges().subscribe(data => console.log(data));
  }

  loadAnswers(questionId) {
    of(this.answers.filter(a => a.questionId === questionId)).subscribe(data => this.answersSubject.next(data));
  }

  setSelectedQuestion(q) {
    this.selectedQuestion = q;
    this.loadAnswers(q.id);
  }

  sendAnswer(text) {
    const answer = {
      id: `a_${this.answers.length + 1}`,
      questionId: this.selectedQuestion.id,
      text,
    };

    this.answers.push(answer);
    this.answersSubject.next(this.answers.filter(a => a.questionId === this.selectedQuestion.id));
  }

  sendQuestion(text) {
    const question = {
      id: `q_${this.questions.length + 1}`,
      text,
      subjectId: 'sb_1',
    };
    this.questions.push(question);
    this.questionsSubject.next(this.questions);
  }
}
