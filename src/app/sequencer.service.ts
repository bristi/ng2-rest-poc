import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Sequencer } from './models/sequencer';


@Injectable()
export class SequencerService {

  constructor(private http: Http) { }

  getSequencers(): Observable<Sequencer[]> {
    return this.http.get(
      'http://ri-ngs-as02-u.ri-domain.local/api/v1/sequencers/',
      {withCredentials: true}
    )
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
