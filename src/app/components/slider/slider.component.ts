import { Component, OnInit } from '@angular/core';
import {SliderService} from './slider.service';
import {AppConstants} from '../../app.constants';
import {Slider} from '../../model/slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
  // @todo: fix loader for cover images
  // styleUrls: ['./slider.component.css', './slider.loader.component.css']
})

export class SliderComponent implements OnInit {

  public ready: boolean;
  public slides: Array<Slider>;
  public activeSlide: Slider;
  public mediaBaseUrl: string;

  constructor(private service: SliderService) {
    this.ready = false;
    this.mediaBaseUrl = AppConstants.MEDIA_SLIDER;
  }

  private static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
    this.service.get(AppConstants.ENDPOINT_HOME_SLIDES).subscribe( (res: Array<Slider>) => {
      this.slides = res;
      let i = 0;
      for (const pic of this.slides) {
        pic.position = i;
        i++;
      }
      this.activeSlide = this.slides[SliderComponent.getRandomInt(0, this.slides.length - 1)];
      this.ready = true;

      setInterval( () => this.navigate('next'), 25000);

    });
  }

  // @todo: fix loader for cover images
  // public imageLoader(z: string): void {
  //   const currentImage = document.getElementById('mainCover');
  //   currentImage.style.zIndex = z;
  // }

  public navigate(direction: string): void {

    // this.imageLoader('-1');

    if (direction === 'next') {
      console.log('hello dave');
      this.activeSlide = this.slides[this.activeSlide['position'] + 1];
      if (typeof this.activeSlide === 'undefined') {
        this.activeSlide = this.slides[0];
      }
      return;
    }

    this.activeSlide = this.slides[this.activeSlide['position'] - 1];
    if (typeof this.activeSlide === 'undefined') {
      this.activeSlide = this.slides[this.slides.length - 1];
    }
  }

}
