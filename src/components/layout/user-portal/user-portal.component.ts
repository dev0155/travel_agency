import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.scss'],
})
export class UserPortalComponent implements OnInit {
  @Output() hideComponent = new EventEmitter();

  constructor(
    private authService: AuthService,
    private router: Router // private store: Store<AppState>
  ) {}

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

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
