import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../../servises/users.service';
import { finalize } from 'rxjs/operators';
import { MessageService } from '../../../../message/services/message.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private router: Router, private users: UsersService, private message: MessageService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.users.login(this.form.get('login').value, this.form.get('password').value).pipe(
        finalize(() => this.loading = false),
      ).subscribe({
        error: error => this.message.error(error.message),
      });
    }
  }

}
