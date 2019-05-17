import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsPageComponent } from './components/subjects-page/subjects-page.component';
import { RouterModule } from '@angular/router';
import { SUBJECTS_ROUTES } from './subjects.routing';
import { SubjectDetailsPageComponent } from './components/subject-details-page/subject-details-page.component';
import { LecturePageComponent } from './components/lecture-page/lecture-page.component';

@NgModule({
  declarations: [SubjectsPageComponent, SubjectDetailsPageComponent, LecturePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SUBJECTS_ROUTES),
  ]
})
export class SubjectsModule { }
