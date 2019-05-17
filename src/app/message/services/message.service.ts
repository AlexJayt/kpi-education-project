import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { BaseMessageComponent } from '../components/base-message/base-message.component';

@Injectable()
export class MessageService {

  constructor(private snackBar: MatSnackBar) {
  }

  error(message: string) {
    this.snackBar.openFromComponent(BaseMessageComponent, {
      duration: 10000,
      verticalPosition: 'top',
      data: {
        message
      },
      panelClass: 'error-snack-bar-message',
    });
  }

  success(message: string) {
    this.snackBar.openFromComponent(BaseMessageComponent, {
      duration: 10000,
      verticalPosition: 'top',
      data: {
        message,
      },
      panelClass: 'success-snack-bar-message',
    });
  }
}
