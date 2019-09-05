import { Component, OnInit, Input } from '@angular/core';

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
}
