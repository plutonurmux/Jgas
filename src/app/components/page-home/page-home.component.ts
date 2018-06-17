import { Component } from '@angular/core';
import { Estate } from '../../model/estate.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent  {

  public estates: Array<Estate>;

  constructor(private route: ActivatedRoute) {
    this.estates = route['data']['_value']['estates'];
  }

}
