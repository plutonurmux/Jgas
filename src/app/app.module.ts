import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MapComponent } from './components/map/map.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageEstateComponent } from './components/page-estate/page-estate.component';
import { PageMapComponent } from './components/page-map/page-map.component';
import { PageCOntactComponent } from './components/page-contact/page-contact.component';

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
    PageCOntactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
