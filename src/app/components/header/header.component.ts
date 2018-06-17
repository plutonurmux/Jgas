import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BroadcasterService} from '../../services/broadcaster.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public activeRouteName: string;

  constructor(private activeRoute: ActivatedRoute, private broadcaster: BroadcasterService ) {
  }

  public setLang(lang: string) {
    this.broadcaster.broadcast('SET_LANGUAGE', lang);
  }


}
