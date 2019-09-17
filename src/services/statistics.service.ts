import { Injectable } from '@angular/core';
import { IInfoBlock } from 'src/interfaces/custom/info-block.model';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor() {}

  data: IInfoBlock[] = [
    { title: 'Total Hotels', amount: 12 },
    { title: 'Total Tours', amount: 200 },
    { title: 'Unique Visitor', amount: 0.12, toPercentage: true },
  ];
}
