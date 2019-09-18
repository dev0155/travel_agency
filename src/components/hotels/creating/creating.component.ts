import { Component, OnInit, ViewChild } from '@angular/core';
import { NewHotelFormComponent } from './new-form/new-form.component';
import { Store, select } from '@ngrx/store';
import { HotelStore } from 'src/store/models/hotels/hotelStore';
import { Create } from 'src/store/actions/hotels.actions';
import { HotelInfo } from 'src/store/models/hotels/hotelInfo';

@Component({
  selector: 'hotel-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss'],
})
export class CreatingHotelComponent implements OnInit {
  @ViewChild(NewHotelFormComponent)
  private form: NewHotelFormComponent;
  public hotel$ = this.store.pipe(select('hotel'));

  constructor(private store: Store<HotelStore>) {}

  ngOnInit() {}

  get formData() {
    return this.form.hotelForm.value;
  }

  formIsInvalid(): boolean {
    return this.form.hotelForm.invalid;
  }

  onCreateBtn() {
    this.store.dispatch(Create({ info: this.formData }));
  }
}
