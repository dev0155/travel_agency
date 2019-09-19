import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tour-item",
  templateUrl: "./tour-item.component.html",
  styleUrls: ["./tour-item.component.scss"]
})
export class TourItemComponent implements OnInit {
  constructor() {}

  tours: Array<{}> = [
    {
      id: 1233332134,
      image: 'http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/pagePropertiesOgImage/bali.jpg',
      name: 'Alara Star Hotel 5',
      location: 'Turkey',
      duration: '7',
      roomType: 'Standard',
      price: 842
    },
    {
      id: 1233332134,
      img: 'http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/pagePropertiesOgImage/bali.jpg',
      name: 'Alara Star Hotel 5',
      location: 'Turkey',
      duration: '7',
      roomType: 'Standard',
      price: 842
    },
    {
      id: 1233332134,
      img: 'http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/pagePropertiesOgImage/bali.jpg',
      name: 'Alara Star Hotel 5',
      location: 'Turkey',
      duration: '7',
      roomType: 'Standard',
      price: 842
    }
  ]

  ngOnInit() {}
}
