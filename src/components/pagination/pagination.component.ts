import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output('click') pageChanged = new EventEmitter();
  @Input() total: number;
  @Input() size: number;

  pageCount: Number[] = [];

  paginationConfig = {
    page: 0,
    min: 1,
    max: 100
  }

  change = (value) => {
    if (value === 1) {
      this.nextPage();
      this.pageChanged.emit(this.paginationConfig);
      console.log(this.paginationConfig);
      return;
    }
    this.prevPage();
    console.log(this.paginationConfig); 
  }

  nextPage() {
    if (this.paginationConfig.page < this.paginationConfig.max) { 
      this.paginationConfig.page += 1;
    }
  }

  prevPage() {
    if (this.paginationConfig.page >= this.paginationConfig.min) {
      this.paginationConfig.page -= 1;
    }
  }

  constructor() { }

  ngOnInit() {
    for(let i = 1; i <= 7; i++) {
        this.pageCount.push(i);
     }
     console.log(this.pageCount);
  }


  getData(data) {
    console.log(data.value)
  }

}