import { Component, OnInit } from '@angular/core';
import { IInfoBlock } from 'src/interfaces/info-block.model';
import { StatisticsService } from 'src/services/statistics.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public data: IInfoBlock[] = [];

  constructor(private readonly statisticService: StatisticsService) { }

  ngOnInit() {
    this.data = this.statisticService.data;
  }
}
