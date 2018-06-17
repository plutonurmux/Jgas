import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/catch';

@Injectable()
export class GenericHttpService {

  constructor(private http: HttpClient) { }

  // since the administration panel isn't REST compliance yet we just net the GET method
  public get(endpoint: string): Observable<Object> {
    return this.http.get(endpoint).catch(e => ErrorObservable.create('Error: ' + e));
  }

}
