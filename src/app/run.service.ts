import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Run } from './models/run';


@Injectable()
export class RunService {

  constructor(private http: Http) { }

  getRun(): Observable<Run> {
    return this.http.get(
      'http://ri-ngs-as02-u.ri-domain.local/api/v1/sequencers/3/runs/160113_MLK_OK172-2010_NB501296_0004_AHVM7HBGXX_Brian/',
      {withCredentials: true}
    )
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
