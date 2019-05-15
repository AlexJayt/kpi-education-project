import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsPageComponent } from './components/subjects-page/subjects-page.component';
import { RouterModule } from '@angular/router';
import { SUBJECTS_ROUTES } from './subjects.routing';

@NgModule({
  declarations: [SubjectsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SUBJECTS_ROUTES),
  ]
})
export class SubjectsModule { }
