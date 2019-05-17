import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SubjectsService } from '../../../../servises/subjects.service';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './new-question-form.component.html',
  styleUrls: ['./new-question-form.component.scss']
})
export class NewQuestionFormComponent implements OnInit {

  message = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data, private dialogRef: MatDialogRef<NewQuestionFormComponent>, private live: SubjectsService) {
  }

  ngOnInit() {
  }

  onSend() {
    if (this.message) {
      this.live.sendQuestion(this.message, this.data);
      this.dialogRef.close();
    }
  }

}
