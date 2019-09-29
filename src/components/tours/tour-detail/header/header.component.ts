import { Component, OnInit, Input } from '@angular/core';
import { ITour } from 'src/interfaces/basics/tour.model';

@Component({
  selector: 'td-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() tour: ITour;

  currency = ['EUR', 'UAH', 'USD'];
  currentCurrency = 'UAH';

  constructor() {}

  ngOnInit() {}

  changeCurrency(changedCurrency: string) {
    this.currentCurrency = changedCurrency;
  }

  getDuration() {
    return Math.abs(
      new Date(this.tour.endDate).getDate() -
        new Date(this.tour.startDate).getDate()
    );
  }
}
