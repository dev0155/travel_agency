import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss'],
})
export class TourDetailComponent implements OnInit {
  public tabs: string[] = [];
  public currentTab: string = 'General';
  public generalInfo = generalInfo;

  constructor() {}

  ngOnInit() {
    this.tabs = tabs;
  }

  public onChangeTab = (tabName: string) => {
    this.currentTab = tabName;
  };
}

const generalInfo = {
  rating: 9,
  phone: '+90 242 814 74 60',
  addresses:
    'Yeni Mahalle Ataturk Bulvar No: 16, 07980, Kemer, Antalya, Turkey',
  beach:
    'The beach is 150 m away from the hotel. Entry into the sea: other pebbles. Beach towels are seen pid deposit.',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
    distinctio alias, molestiae, reprehenderit praesentium ut ea rem itaque
    officiis vel laboriosam modi neque. Laudantium eveniet voluptates incidunt
    alias at blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Modi, nostrum dignissimos, voluptatem sunt perferendis, quae libero
    quibusdam reprehenderit corporis quam cupiditate aspernatur facere illo
    enim quia minima consequatur cum magni.`,
  sport: ` 2 water sport (1 for children, 1 for adults).`,
};

const tabs: string[] = ['General', 'Service', 'Photos', 'Map', 'Comments'];
