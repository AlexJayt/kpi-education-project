import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../../../servises/subjects.service';
import { MatDialog } from '@angular/material';
import { NewQuestionFormComponent } from '../new-question-form/new-question-form.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  questions;

  subscription: Subscription;

  constructor(private live: SubjectsService, private dialog: MatDialog, private route: ActivatedRoute) {
  }

  get selected() {
    return this.live.selectedQuestion;
  }

  ngOnInit() {
    this.live.loadQuestions(this.route.snapshot.params.lectureId);
    this.live.questions$.subscribe(data => this.questions = data);
    this.live.answersSubject.next(null);
    this.live.selectedQuestion = null;
  }

  onSelect(q) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.live.setSelectedQuestion(q);
  }

  onAsk() {
    this.dialog.open(NewQuestionFormComponent, {
      data: this.route.snapshot.params.lectureId,
    });
  }

}
