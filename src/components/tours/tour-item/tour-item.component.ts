import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tour-item",
  templateUrl: "./tour-item.component.html",
  styleUrls: ["./tour-item.component.scss"]
})
export class TourItemComponent implements OnInit {
  constructor() {}

  hotelName: string = "Alara Star Hotel 5*";
  hotelLocation: string = "Alania, Turkey";
  duration: number = 7;
  roomType: string = "Standart";
  price: number = 842;
  ngOnInit() {}
}
