import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../servises/users.service';
import { finalize } from 'rxjs/operators';
import { MessageService } from '../../../../message/services/message.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private users: UsersService, private message: MessageService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      login: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.users.createUser(
        this.form.get('login').value,
        this.form.get('email').value,
        this.form.get('phone').value,
        this.form.get('password').value,
      ).pipe(
        finalize(() => this.loading = false),
      ).subscribe({
        error: error => this.message.error(error.message),
      });
    }
  }

}
