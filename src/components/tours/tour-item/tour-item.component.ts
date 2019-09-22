import { Component, OnInit } from "@angular/core";
import { ToursService } from 'src/services/tours.service';

@Component({
  selector: "app-tour-item",
  templateUrl: "./tour-item.component.html",
  styleUrls: ["./tour-item.component.scss"]
})
export class TourItemComponent implements OnInit {
  
  constructor(
    private tourService: ToursService
  ) {}

  tours: Array<{}> = [];
  query: object = {
    limit: 5,
    skip: 0
  };

  ngOnInit() {
    this.getTours(this.query);
  }

  getTours(query) {
    this.tourService.getTours(query).subscribe(res => {
      this.tours.push(res);
    })
  }
}