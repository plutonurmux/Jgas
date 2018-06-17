import { AfterViewInit, Component, Input } from '@angular/core';
import { AppConstants } from '../../app.constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements AfterViewInit {

  @Input()
  public estate: object;
  public mediaPhotosUrl: string = AppConstants.MEDIA_PHOTOS;
  public cardID: string;

  constructor() {
    this.cardID = Math.random().toString();
  }

  ngAfterViewInit() {
    const card = document.getElementById(this.cardID);
    card.addEventListener('mouseover', function () {
      card.classList.add('shadow-left-right');
    });
    card.addEventListener('mouseleave', function () {
      card.classList.remove('shadow-left-right');
    });
  }


  public sumBedrooms(): number {
    return parseInt(this.estate['imovel_dormitorio'], 10) + parseInt(this.estate['imovel_suite'], 10);
  }

  public setZIndex(enter: boolean): void {
    if (enter) {
      // @todo: fix z-index, magic numbers aren't cool
      setTimeout(() => {
        document.getElementById(this.cardID).style.zIndex = '777777 !important';
      }, 150);
      return;
    }
    document.getElementById(this.cardID).style.zIndex = 'inherit';
  }

}

