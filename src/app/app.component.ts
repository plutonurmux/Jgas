import {Component, OnInit} from '@angular/core';
import {BroadcasterService} from './services/broadcaster.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService, private broadcaster: BroadcasterService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('pt_BR');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('pt_BR');
  }

  ngOnInit() {
    this.broadcaster.on<string>('SET_LANGUAGE').subscribe( (lang) => { this.translate.use(lang); });
  }

}


