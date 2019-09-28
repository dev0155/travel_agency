import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/services/tours.service';
import { ITour } from 'src/interfaces/basics/tour.model';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss'],
})
export class TourDetailComponent implements OnInit {
  public tabs: string[] = [];
  public currentTab: string = 'General';
  public tour = {} as ITour;

  constructor(private readonly toursService: ToursService) {}

  ngOnInit() {
    this.tabs = tabs;
    // this.toursService.getTours().subscribe((response: ITour[]) => {
    //   this.tour = response[0];
    // });
  }

  public onChangeTab = (tabName: string) => {
    this.currentTab = tabName;
  };
}

const tabs: string[] = ['General', 'Service', 'Photos', 'Map', 'Comments'];
