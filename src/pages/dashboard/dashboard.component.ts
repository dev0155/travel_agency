import { Component, OnInit } from '@angular/core';
import { IInfoBlock } from 'src/interfaces/info-block.model';
import { StatisticsService } from 'src/services/statistics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public data: IInfoBlock[] = [];

  constructor(private readonly statisticService: StatisticsService) {}

  ngOnInit() {
    this.data = this.statisticService.data;
  }
}
