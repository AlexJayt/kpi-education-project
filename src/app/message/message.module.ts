import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_SNACK_BAR_DATA, MatButtonModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { BaseMessageComponent } from './components/base-message/base-message.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [BaseMessageComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    MessageService,
    {
      provide: MAT_SNACK_BAR_DATA,
      useValue: 'Error',
    },
  ],
  entryComponents: [
    BaseMessageComponent,
  ],
})
export class MessageModule {
}
