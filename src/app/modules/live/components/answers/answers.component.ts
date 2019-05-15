import { Component, OnInit } from '@angular/core';
import { LiveService } from '../../../../servises/live.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  answers;

  constructor(private live: LiveService) {
  }

  ngOnInit() {
    this.live.answers$.subscribe(data => this.answers = data);
  }


}
