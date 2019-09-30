import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number;

  constructor() {}

  ngOnInit() {
  }

  get style() {
    return {
      background: `linear-gradient(to right, red, orange, yellow, lightgreen, green ${this
        .rating * 10}%, #F2F3F4 0% ${this.rating * 10 + 1}%, #979A9A 0% 68%)`,
    };
  }
}
