import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() pageChanged = new EventEmitter();
  @Input() totalItems: number;
  @Input() itemsPerPage: number;

  currentPage = 1;
  pages: number[] = [];

  query = {
    limit: this.itemsPerPage,
    skip: 0
  };

  constructor() { }

  ngOnInit() {
    console.log(this.itemsPerPage);
      this.calcCountOfPages();
  }

  calcCountOfPages() {
    const count = this.totalItems / this.itemsPerPage;
    for (let i = 0; i < count; i++) {
      this.pages.push(i);
    }
  }

  nextPage(count) {
    if (this.query.skip < this.totalItems) {
      this.query.skip += count;
      this.currentPage += 1;
    }
  }

  previousPage(count) {
    if (this.query.skip > 0 && this.currentPage > 1) {
      this.query.skip -= count;
      this.currentPage -= 1;
    }
  }

  change = (value) => {
    const count = this.query.limit;
    if (value === 1) {
      this.nextPage(count);
      this.pageChanged.emit(this.query);
      return;
    }
    this.previousPage(count);
    this.previousPage(this.query.limit);
  }
}
