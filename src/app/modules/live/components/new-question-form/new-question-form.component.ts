import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LiveService } from '../../../../servises/live.service';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './new-question-form.component.html',
  styleUrls: ['./new-question-form.component.scss']
})
export class NewQuestionFormComponent implements OnInit {

  message = '';

  constructor(private dialogRef: MatDialogRef<NewQuestionFormComponent>, private live: LiveService) {
  }

  ngOnInit() {
  }

  onSend() {
    if (this.message) {
      this.live.sendQuestion(this.message);
      this.dialogRef.close();
    }
  }

}
