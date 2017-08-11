import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../show' 

@Component({
  selector: 'tvmaze-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  @Input() show: Show;
  @Output() onClicked = new EventEmitter<Show>();

  viewDetail() {
    console.log('view detail')
    this.onClicked.emit(this.show);
  }

}
