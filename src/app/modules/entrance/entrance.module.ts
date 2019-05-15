import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { RouterModule } from '@angular/router';
import { ENTRANCE_ROUTING } from './entrance.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ENTRANCE_ROUTING),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class EntranceModule {
}
