import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.scss'],
})
export class UserPortalComponent implements OnInit {
  @Output() hideComponent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  linkClicked() {
    this.hideComponent.emit(false);
  }
}
