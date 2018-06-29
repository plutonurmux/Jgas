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
  private firstItem: HTMLElement;
  private lastItem: HTMLElement;

  constructor() { }

  private static transformMarginIntoNumber(margin: string): number {
    if (margin === '') {
      return 300;
    }
    return parseInt(margin.substring(0, margin.length - 2), 10);
  }

  private static isInViewPort(element: HTMLElement): boolean {
    const bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  ngAfterViewInit() {
    const itemsContainer: HTMLElement = document.getElementById('itemsList');
    const itemsContainerWidth: number = ( this.estates.length + 1 ) * 300;
    itemsContainer.style.width = itemsContainerWidth + 'px';

    this.firstItem = document.getElementById('itemNumber_0');
    this.lastItem = document.getElementById('itemNumber_' + (this.estates.length - 1).toString());
  }

  public scrollItems(onRight: boolean): void {
    const itemsContainer: HTMLElement = document.getElementById('itemsList');
    let margin: string;


    if (onRight) {
      if (PropertyComponent.isInViewPort(this.lastItem)) {
        return;
      }
      margin = PropertyComponent.transformMarginIntoNumber(itemsContainer.style.marginLeft) - 300 + 'px';
      itemsContainer.style.marginLeft = margin;
      return;
    }

    if (PropertyComponent.isInViewPort(this.firstItem)) {
      return;
    }
    margin = PropertyComponent.transformMarginIntoNumber(itemsContainer.style.marginLeft) + 300 + 'px';
    itemsContainer.style.marginLeft = margin;
  }

  public sumBedrooms(estate): number {
    return parseInt(estate['imovel_dormitorio'], 10) + parseInt(estate['imovel_suite'], 10);
  }

}
