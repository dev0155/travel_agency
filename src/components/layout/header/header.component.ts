import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SidebarService } from 'src/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserPortalDisplayed = false;
  @ViewChild('user') private userBlock: ElementRef;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {}

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
