import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private closedService: SidebarService) {}

  isClosed() {
    return this.closedService.isClosed;
  }

  show() {
    this.closedService.isClosed = false;
  }

  close() {
    this.closedService.isClosed = true;
  }

  ngOnInit() {}
}
