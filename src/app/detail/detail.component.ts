import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Show } from '../show';
import { ShowService } from '../shows.service';

@Component({
  selector: 'tvmaze-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  show = new Show();
  error: any;

  constructor(
    private showService: ShowService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.showService.getShow(id).then(show => this.show = show);
      } else {
        this.show = new Show();
      }
    });
  }
}
