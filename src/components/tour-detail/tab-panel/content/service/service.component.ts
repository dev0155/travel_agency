import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'td-service-tab',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  @Input() services;
  constructor() {}

  ngOnInit() {}
}
