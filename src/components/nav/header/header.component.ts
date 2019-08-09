import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isHamClosed: boolean = true;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.isHamClosed = !this.isHamClosed;
  }
}
