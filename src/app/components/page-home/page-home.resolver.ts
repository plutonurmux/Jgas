import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { PageHomeService } from './page-home.service';
import { AppConstants } from '../../app.constants';
import { Property } from '../../model/property.model';

@Injectable()
export class PageHomeResolver implements Resolve<any> {

  constructor(private http: PageHomeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Property>>  {
    return Observable.create((observer: Observer<any>) => {
      this.http.get(AppConstants.ENDPOINT_HOME_PAGE)
        .subscribe(
          (res) => { observer.next(res); observer.complete(); },
          (err) => { throw new Error(err); }
        );
    });
  }

}
