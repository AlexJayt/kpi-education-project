import { Component, OnInit } from '@angular/core';
import { LiveService } from '../../../../servises/live.service';
import { Answer } from '../../../../models/answer';
import { UsersService } from '../../../../servises/users.service';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  answers: Answer[];

  constructor(public live: LiveService, private users: UsersService) {
  }

  get user(): User {
    return this.users.user;
  }

  ngOnInit() {
    this.live.answers$.subscribe(data => this.answers = data);
  }

  onToggle(answer) {
    this.live.toggle(answer);
  }


}
