import { Routes } from '@angular/router';
import { BaseNavigationComponent } from './components/base-navigation/base-navigation.component';

export const BASE_NAVIGATION_ROUTES: Routes = [
  {
    path: '',
    component: BaseNavigationComponent,
    children: [
      {
        path: 'live',
        loadChildren: 'src/app/modules/live/live.module#LiveModule'
      },
      {
        path: 'subjects',
        loadChildren: 'src/app/modules/subjects/subjects.module#SubjectsModule',
      },
      {
        path: 'settings',
        loadChildren: 'src/app/modules/settings/settings.module#SettingsModule',
      },
      {
        path: '**',
        redirectTo: 'live',
      }
    ]
  }
];
