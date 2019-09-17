import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'td-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit {
  @Input() tabs: string[];
  @Input() currentTab: string;
  @Output() changeTab = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onChangeTab = (tabName: string) => {
    this.currentTab = tabName;
    this.changeTab.emit(tabName);
  };
}
