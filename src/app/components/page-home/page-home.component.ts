import { Component } from '@angular/core';
import { Property } from '../../model/property.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent  {

  public estates: Array<Property>;

  constructor(private route: ActivatedRoute) {
    this.estates = route['data']['_value']['estates'];
  }

}
