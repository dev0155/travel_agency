import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.scss'],
})
export class UserPortalComponent implements OnInit {
  @Output() hideComponent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  clickOutside(event) {
    if (event.isClickedOutside) {
      this.hideComponent.emit(event.elementRef);
    } else {
      this.hide();
    }
  }

  hide() {
    this.hideComponent.emit(null);
  }
}
