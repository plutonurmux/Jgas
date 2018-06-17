import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BroadcasterService} from "../../services/broadcaster.service";

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  constructor(private router: Router, private broadcaster: BroadcasterService) { }

  ngOnInit() {
  }

  public goToTop(): void {
    setTimeout( () =>
        document.getElementById('topOfTheWorld').scrollIntoView({ block: 'start', behavior: 'smooth' })
      , 100);
  }

}
