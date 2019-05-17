import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundLoaderComponent } from './round-loader/round-loader.component';
import { MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { LoadingDirective } from './loading.directive';
import { ContentStubComponent } from './content-stub/content-stub.component';
import { LoaderStubComponent } from './loader-stub/loader-stub.component';

@NgModule({
  declarations: [
    RoundLoaderComponent,
    LoadingDirective,
    ContentStubComponent,
    LoaderStubComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  exports: [
    LoadingDirective,
    ContentStubComponent,
    LoaderStubComponent,
  ],
  entryComponents: [
    RoundLoaderComponent,
  ],
})
export class LoadingModule {
}
