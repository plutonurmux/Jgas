import { NgModule } from '@angular/core';
import { PageHomeComponent } from './components/page-home/page-home.component';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: PageHomeComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ],
  providers: [
    PageHomeComponent
  ],
})

export class AppRoutingModule { }
