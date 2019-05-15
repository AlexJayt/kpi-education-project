import { Component, OnInit } from '@angular/core';
import { LiveService } from '../../../../servises/live.service';
import { MatDialog } from '@angular/material';
import { NewQuestionFormComponent } from '../new-question-form/new-question-form.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions;

  constructor(private live: LiveService, private dialog: MatDialog) {
  }

  get selected() {
    return this.live.selectedQuestion;
  }

  ngOnInit() {
    this.live.loadQuestions();
    this.live.questions$.subscribe(data => this.questions = data);
  }

  onSelect(q) {
    this.live.setSelectedQuestion(q);
  }

  onAsk() {
    this.dialog.open(NewQuestionFormComponent, {
      data: this.selected,
    });
  }

}
