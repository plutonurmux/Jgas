import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Property} from '../../model/property.model';
import {AppConstants} from '../../app.constants';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})

export class PropertyComponent implements AfterViewInit {


  @Input()
  public estates: Array<Property>;
  public mediaPhotosUrl: string = AppConstants.MEDIA_PHOTOS;

  constructor() { }

  ngAfterViewInit() {
    const itemsContainer: HTMLElement = document.getElementById('itemsList');
    const itemsContainerWidth: number = ( this.estates.length + 1 ) * 300;
    itemsContainer.style.width = itemsContainerWidth + 'px';
  }

  public sumBedrooms(estate): number {
    return parseInt(estate['imovel_dormitorio'], 10) + parseInt(estate['imovel_suite'], 10);
  }

  public propertiesHorizontalScroll(direction: string): void {

  }


}
