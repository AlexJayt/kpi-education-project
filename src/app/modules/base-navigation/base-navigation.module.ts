import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseNavigationComponent } from './components/base-navigation/base-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { BASE_NAVIGATION_ROUTES } from './base-navigation.routing';

@NgModule({
  declarations: [BaseNavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BASE_NAVIGATION_ROUTES),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ]
})
export class BaseNavigationModule { }
