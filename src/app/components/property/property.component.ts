import {Component, Input, OnInit} from '@angular/core';
import {Estate} from '../../model/estate.model';
import {AppConstants} from '../../app.constants';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})

export class PropertyComponent implements OnInit {


  @Input()
  public estates: Array<Estate>;
  public mediaPhotosUrl: string = AppConstants.MEDIA_PHOTOS;

  constructor() { }

  ngOnInit() {
    console.log(this.estates);
  }

  public sumBedrooms(estate): number {
    return parseInt(estate['imovel_dormitorio'], 10) + parseInt(estate['imovel_suite'], 10);
  }

}
