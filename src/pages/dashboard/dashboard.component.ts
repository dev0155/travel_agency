import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IInfoBlock } from 'src/interfaces/custom/info-block.model';
import { StatisticsService } from 'src/services/statistics.service';
declare var jQuery: (arg0: any) => { vectorMap: (data: any) => void; };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public data: IInfoBlock[] = [];

  constructor(private readonly statisticService: StatisticsService) { }

  ngOnInit() {
    this.data = this.statisticService.data;
  }

  ngAfterViewInit() {
    this.renderMap('#world-map');
  }

  /**
   * Render map jvectormap
   * @param selector -- container selector
   * docs:
   *    http://jvectormap.com/documentation/
   *    http://jvectormap.com/documentation/javascript-api/jvm-map/
   */
  renderMap(selector: string): void {
    jQuery(selector).vectorMap({
      map: 'world_mill_en',
      backgroundColor: 'white',
      regionStyle: {
        initial: {
          fill: '#e1e4e7',
          'fill-opacity': 1,
          stroke: 'none',
          'stroke-width': 0,
          'stroke-opacity': 1
        },
      }
    });
  }
}
