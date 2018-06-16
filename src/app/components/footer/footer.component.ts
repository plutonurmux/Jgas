import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  public isReady: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout( () => this.isReady = true, 2500);
  }

}
