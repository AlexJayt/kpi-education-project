import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { RouterModule } from '@angular/router';
import { SETTINGS_ROUTES } from './settings.routing';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SETTINGS_ROUTES),
  ]
})
export class SettingsModule {
}
