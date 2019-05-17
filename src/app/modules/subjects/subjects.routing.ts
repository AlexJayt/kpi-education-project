import { Routes } from '@angular/router';
import { SubjectsPageComponent } from './components/subjects-page/subjects-page.component';
import { SubjectDetailsPageComponent } from './components/subject-details-page/subject-details-page.component';
import { LecturePageComponent } from './components/lecture-page/lecture-page.component';

export const SUBJECTS_ROUTES: Routes = [
  {
    path: '',
    component: SubjectsPageComponent,
  },
  {
    path: ':id',
    component: SubjectDetailsPageComponent,
  },
  {
    path: ':id/:lectureId',
    component: LecturePageComponent,
  },
];
