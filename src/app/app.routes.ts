import { NgModule } from '@angular/core';
import { PageHomeComponent } from './components/page-home/page-home.component';
import {RouterModule, Routes} from '@angular/router';
import {PageCompanyComponent} from './components/page-company/page-company.component';
import {PageMapComponent} from './components/page-map/page-map.component';
import {PageContactComponent} from './components/page-contact/page-contact.component';
import {PageEstateComponent} from './components/page-estate/page-estate.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: PageHomeComponent
  }, {
    path: 'construtora',
    component: PageCompanyComponent
  }, {
    path: 'imoveis-no-mapa',
    component: PageMapComponent
  }, {
    path: 'fale-conosco',
    component: PageContactComponent
  }, {
    path: 'imovel/:id/:prettyName',
    component: PageEstateComponent
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
