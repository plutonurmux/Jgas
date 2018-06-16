import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MapComponent } from './components/map/map.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageEstateComponent } from './components/page-estate/page-estate.component';
import { PageMapComponent } from './components/page-map/page-map.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormComponent } from './components/form/form.component';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpModule} from '@angular/http';
import {BroadcasterService} from './services/broadcaster.service';
import { PageCompanyComponent } from './components/page-company/page-company.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BackToTopComponent,
    GalleryComponent,
    MapComponent,
    PageHomeComponent,
    PageEstateComponent,
    PageMapComponent,
    PageContactComponent,
    SliderComponent,
    FormComponent,
    PageCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })

  ],
  providers: [
    HttpClient,
    BroadcasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
