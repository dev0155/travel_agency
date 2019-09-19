import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-tab',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  @Input() tourInfo;

  constructor() {}

  ngOnInit() {}
}
