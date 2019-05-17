import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsPageComponent } from './components/subjects-page/subjects-page.component';
import { RouterModule } from '@angular/router';
import { SUBJECTS_ROUTES } from './subjects.routing';
import { SubjectDetailsPageComponent } from './components/subject-details-page/subject-details-page.component';
import { LecturePageComponent } from './components/lecture-page/lecture-page.component';
import { AnswersComponent } from './components/answers/answers.component';
import { NewAnswerFormComponent } from './components/new-answer-form/new-answer-form.component';
import { NewQuestionFormComponent } from './components/new-question-form/new-question-form.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../../loading/loading.module';

@NgModule({
  declarations: [
    SubjectsPageComponent,
    SubjectDetailsPageComponent,
    LecturePageComponent,
    AnswersComponent,
    NewAnswerFormComponent,
    NewQuestionFormComponent,
    QuestionsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    RouterModule.forChild(SUBJECTS_ROUTES),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
  ],
  entryComponents: [
    NewQuestionFormComponent,
  ]
})
export class SubjectsModule {
}
