import {Component, OnInit} from '@angular/core';
import {BroadcasterService} from './services/broadcaster.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <div class="clearfix"></div>
    <div style="padding-top: 225px"></div>
    <hr>
    <app-footer></app-footer>
  `
})

export class AppComponent implements OnInit {

  constructor(private translate: TranslateService, private broadcaster: BroadcasterService) {
    // @todo: save selected lang at localStorage and then load it
    translate.setDefaultLang('pt_BR');
    translate.use('pt_BR');
  }

  ngOnInit() {
    // just for fun, won't be here in prod mode ;)
    console.log('Hello Dave, you\'re looking well today.');
    this.broadcaster.on<string>('SET_LANGUAGE').subscribe( (lang) => {
      this.translate.use(lang);
    });
  }

}


