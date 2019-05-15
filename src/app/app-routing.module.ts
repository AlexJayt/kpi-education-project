import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/modules/entrance/entrance.module#EntranceModule',
  },
  {
    path: 'app',
    loadChildren: 'src/app/modules/base-navigation/base-navigation.module#BaseNavigationModule',
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
