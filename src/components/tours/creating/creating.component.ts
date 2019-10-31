import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { ValidDateRange } from 'src/components/common/valid-date-range/valid-date-range';
import { AppState } from 'src/store';
import IAddress from 'src/store/models/IAddress.model';
import { ToursActions } from 'src/store/actions/tours.actions';
import { IHttpTour, IService } from 'src/store/models/tours/ITour.model';
import { IHotel } from 'src/interfaces/basics/hotel.model';
import { HotelActions } from 'src/store/actions/hotel.actions';

@Component({
  selector: 'tour-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss'],
})
export class CreatingTourComponent implements OnInit {
  public tourForm: FormGroup;
  public roomTypes: string[] = ['Economy', 'Lux', 'Standard'];
  public services: IService[];
  public hotels: IHotel[];

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(ToursActions.getServices.request());
    this.store.dispatch(
      HotelActions.getAll.request({ params: { page: 0, limit: 0 } })
    );
    this.createForm();
    this.getStoreData();
    this.onChanges();
  }

  public createTour(): void {
    this.store.dispatch(
      ToursActions.create.request({ tour: this.restructedInfo })
    );
  }

  public isValid(name: string): boolean {
    return this.tourForm.get(name).touched && this.tourForm.get(name).invalid;
  }

  private createForm(): void {
    this.tourForm = this.fb.group(
      {
        hotel: ['', Validators.required],
        roomTypes: ['', Validators.required],
        address: ['Address'],
        services: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        prices: this.fb.group(this.initPricesControl()),
        description: [
          '',
          Validators.compose([Validators.minLength(140), Validators.required]),
        ],
      },
      {
        validator: ValidDateRange('startDate', 'endDate'),
      }
    );
  }

  private initPricesControl() {
    const obj = {};
    this.roomTypes.map((item) => {
      obj[item] = this.fb.control('');
    });
    return obj;
  }

  private getStoreData() {
    this.store
      .pipe(select('tours'))
      .subscribe(({ services }) => (this.services = services));
    this.store.pipe(select('hotel')).subscribe(({ items }) => {
      this.hotels = items;
    });
  }

  private onHotelChanges(): void {
    this.tourForm.get('hotel').valueChanges.subscribe((data) => {
      if (data) {
        this.tourForm
          .get('address')
          .setValue(this.addressToString(data.address));
      }
    });
  }

  private addressToString(address: IAddress): string {
    return `${address.street}, ${address.state}, ${address.city}, ${address.country} `;
  }

  private get restructedInfo(): IHttpTour {
    const {
      services,
      startDate,
      endDate,
      hotel,
      description,
    } = this.tourForm.value;

    const rooms = [];

    for (const item of Object.keys(this.prices)) {
      if (this.prices[item] !== '') {
        rooms.push({ price: this.prices[item], roomType: item });
      }
    }

    return {
      hotelId: hotel.id,
      description,
      endDate,
      startDate,
      services,
      rooms,
    };
  }

  private onChanges(): void {
    this.onHotelChanges();
    this.onRoomsChanges();
  }

  private updatedPrices(selected: string[]): void {
    const control = this.tourForm.get('prices');
    const updated = {};
    Object.keys(this.prices).map((item) => {
      if (selected.includes(item)) {
        const value = control.value[item];
        updated[item] = value !== '' ? value : null;
      } else {
        updated[item] = '';
      }
    });
    control.patchValue(updated);
  }

  public isPricesValid(): boolean {
    for (const item of Object.keys(this.prices)) {
      if (this.prices[item] === '') {
        continue;
      } else if (this.prices[item] <= 0 || !this.prices[item]) {
        return false;
      }
    }
    return true;
  }

  public get rooms(): string[] {
    return this.tourForm.get('roomTypes').value;
  }

  private get prices(): string[] {
    return this.tourForm.get('prices').value;
  }

  private onRoomsChanges(): void {
    this.tourForm.get('roomTypes').valueChanges.subscribe((data) => {
      this.updatedPrices(data);
    });
  }
}
