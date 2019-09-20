import { Component, OnInit, ViewChild } from '@angular/core';
import { NewHotelFormComponent } from './new-form/new-form.component';
import { Store, select } from '@ngrx/store';
import { setAllHotelForm } from 'src/store/actions/newHotel.actions';

@Component({
  selector: 'hotel-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss'],
})
export class CreatingHotelComponent implements OnInit {
  @ViewChild(NewHotelFormComponent)
  private form: NewHotelFormComponent;
  public hotel$ = this.store.pipe(select('hotel'));

  constructor(private store: Store<any>) {}

  ngOnInit() {}

  get formData() {
    return this.form.hotelForm.value;
  }

  formIsInvalid(): boolean {
    return this.form.hotelForm.invalid;
  }

  onCreateBtn() {
    this.store.dispatch(
      setAllHotelForm.request({ hotelForm: this.formData, images: null })
    );
  }
}
