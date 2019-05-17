import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../../../servises/subjects.service';

@Component({
  selector: 'app-new-answer-form',
  templateUrl: './new-answer-form.component.html',
  styleUrls: ['./new-answer-form.component.scss']
})
export class NewAnswerFormComponent implements OnInit {

  message = '';

  constructor(private live: SubjectsService) {
  }

  ngOnInit() {
  }

  onSend() {
    if (this.message) {
      this.live.sendAnswer(this.message);
      this.message = '';
    }
  }

}
