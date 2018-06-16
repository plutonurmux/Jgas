import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs';

interface BroadcastEvent {
  key: any;
  data?: any;
}

export class BroadcasterService {
  private eventBus: Subject<BroadcastEvent>;

  constructor() {
    this.eventBus = new Subject<BroadcastEvent>();
  }

  public broadcast(key: any, data?: any) {
    this.eventBus.next({key, data});
  }

  public on<T>(key: any): Observable<T> {
    return this.eventBus.asObservable()
      .filter(event => event.key === key)
      .map(event => <T>event.data);
  }
}
