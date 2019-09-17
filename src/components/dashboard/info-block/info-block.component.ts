import { Component, OnInit, Input } from '@angular/core';
import { IInfoBlock } from 'src/interfaces/custom/info-block.model';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss'],
})
export class InfoBlockComponent implements OnInit {
  @Input() info: IInfoBlock;

  constructor() {}

  ngOnInit() {}
}
