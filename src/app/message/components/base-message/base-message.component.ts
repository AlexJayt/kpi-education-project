import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-base-message',
  templateUrl: './base-message.component.html',
  styleUrls: ['./base-message.component.scss'],
})
export class BaseMessageComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    public data: { message: string, params: any },
    private snackBarRef: MatSnackBarRef<BaseMessageComponent>,
  ) {
  }

  ngOnInit() {
  }

  onClose() {
    this.snackBarRef.dismissWithAction();
  }

}
