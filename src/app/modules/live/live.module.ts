import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivePageComponent } from './components/live-page/live-page.component';
import { RouterModule } from '@angular/router';
import { LIVE_ROUTES } from './live.routing';
import { NewQuestionFormComponent } from './components/new-question-form/new-question-form.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AnswersComponent } from './components/answers/answers.component';
import { NewAnswerFormComponent } from './components/new-answer-form/new-answer-form.component';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LivePageComponent, NewQuestionFormComponent, QuestionsComponent, AnswersComponent, NewAnswerFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(LIVE_ROUTES),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  entryComponents: [
    NewQuestionFormComponent,
  ]
})
export class LiveModule {
}
