import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/services/sidebar.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {

  constructor(private closedService: SidebarService) {}

  ngOnInit() {}
}
