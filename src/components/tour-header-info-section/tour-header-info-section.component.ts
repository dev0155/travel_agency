import { Component, OnInit } from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-tour-header-info-section",
  templateUrl: "./tour-header-info-section.component.html",
  styleUrls: ["./tour-header-info-section.component.scss"]
})
export class TourHeaderInfoSectionComponent implements OnInit {
  public infoTour = infoTour;
  public currency = currency;
  public currentCurrency: string = "UAH";

  constructor() {}

  ngOnInit() {}
}

const infoTour = {
  nameHotel: "Armir Resort (Ex. Kemer Millennium Resort) 5*",
  city: "Kemer",
  country: "Turkey",
  tourId: 769342,
  status: "relevant",
  price: 23124,
  duration: 6,
  roomType: "Promo"
};

const currency = {
  eur: "EUR",
  uah: "UAH",
  usd: "USD"
};
