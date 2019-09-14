import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges {
  rating: number = 4;
  starWidth: number;
  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5;
  }


}
