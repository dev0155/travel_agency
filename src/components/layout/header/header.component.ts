import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SidebarService } from 'src/services/sidebar.service';
import { AppState } from 'src/store';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserPortalDisplayed = false;
  @ViewChild('user') private userBlock: ElementRef;

  public userName: string;

  constructor(
    private sidebarService: SidebarService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store
      .pipe(select('users'))
      .subscribe(
        ({ firstName, lastName }) =>
          (this.userName = `${firstName} ${lastName}`)
      );
  }

  toggle() {
    this.sidebarService.isClosed = !this.sidebarService.isClosed;
  }

  displayUserPortal = () => {
    this.isUserPortalDisplayed = !this.isUserPortalDisplayed;
  };

  hideComponent(element) {
    this.isUserPortalDisplayed = this.userBlock.nativeElement.contains(element);
  }
}
