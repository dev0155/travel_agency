import { Component, OnInit, ViewChild } from '@angular/core';
import { NewHotelFormComponent } from './new-form/new-form.component';

@Component({
  selector: 'hotel-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss'],
})
export class CreatingHotelComponent implements OnInit {
  @ViewChild(NewHotelFormComponent)
  private form: NewHotelFormComponent;

  constructor() {}

  ngOnInit() {}

  formIsInvalid() {
    return this.form.hotelForm.invalid;
  }
}
