import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isClosed: boolean = true;
  constructor() {}
}
