import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from './show';
import { ShowService } from './shows.service';

@Component({
  selector: 'tvmaze-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shows: Show[] = [];

  constructor(
    private router: Router,
    private showService: ShowService) {
  }

  ngOnInit(): void {
    this.showService.getShows()
      .then(shows => this.shows = shows);
  }

  gotoDetail(show: Show): void {
    const link = ['/detail', show.id];
    this.router.navigate(link);
  }
}
