import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs: string[] = [];
  @Input() currentTab: string = '';
  @Output() changeTab = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  goToTab = (tabName: string) => {
    this.currentTab = tabName;
    this.changeTab.emit(tabName);
  };
}
