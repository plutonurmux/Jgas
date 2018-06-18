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

  private scrollItems(onRight: boolean): void {
    const itemsContainer: HTMLElement = document.getElementById('itemsList');

    if (onRight) {
      let marginLeft = 300;
      setInterval( () => {
        if (itemsContainer.style.width < itemsContainer.style.marginLeft) {
          itemsContainer.style.marginLeft = marginLeft + 'px';
          marginLeft += 300;
        }
      }, 200);
    }

  }

  public sumBedrooms(estate): number {
    return parseInt(estate['imovel_dormitorio'], 10) + parseInt(estate['imovel_suite'], 10);
  }

  public propertiesHorizontalScroll(isLeaving: boolean): void {
    const itemsContainer: HTMLElement = document.getElementById('itemsList');
    itemsContainer.addEventListener('mousemove', (e) => {

      if (!isLeaving) {

        if (window.innerWidth - e.screenX < 40) {
          this.scrollItems(true);
          return;
        }

        if ((window.innerWidth - e.screenX) < (window.innerWidth - 40)) {
          this.scrollItems(false);
          return;
        }
      }
    });

    if (isLeaving) {
      itemsContainer.removeEventListener('mousemove', (e) => { console.log('Event canceled.'); });
    }
  }


}
