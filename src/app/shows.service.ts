import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Show } from './show';

@Injectable()
export class ShowService {
  private showsUrl = 'http://api.tvmaze.com/shows';
  private shows: Show[];

  constructor(private http: Http) { }

  getShows(): Promise<Array<Show>> {
    return this.http
      .get(this.showsUrl)
      .toPromise()
      .then((response) => {
        this.shows = response.json() as Show[];
        return this.shows;
      })
      .catch(this.handleError);
  }

  getShow(id: number) {
      return this.fetchShow(id)
      .then(show => { return show });
  }

  fetchShow(id: number): Promise<Show> {
    return this.http
      .get(this.showsUrl + '/' + id)
      .toPromise()
      .then((response) => {
        return response.json() as Show;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
