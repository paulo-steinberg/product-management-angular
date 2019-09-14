import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this,this.rating} was clicked!`);
  }
}
