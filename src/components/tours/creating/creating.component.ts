import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidDateRange } from 'src/components/common/valid-date-range/valid-date-range';
import { ITourService } from 'src/store/models/tours/ITourService.model';
import { AppState } from 'src/store';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'tour-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss'],
})
export class CreatingTourComponent implements OnInit {
  public tourForm: FormGroup;
  public roomType: string[] = ['Economy', 'Lux', 'Standard'];
  public services: ITourService[];

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.createForm();
    this.store
      .pipe(select('tours'))
      .subscribe(({ services }) => (this.services = services));
  }

  public isValid(name: string): boolean {
    return this.tourForm.get(name).touched && this.tourForm.get(name).invalid;
  }

  private createForm(): void {
    this.tourForm = this.fb.group(
      {
        hotel: ['', Validators.required],
        roomType: ['', Validators.required],
        address: ['Address'],
        services: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        price: [
          '',
          Validators.compose([Validators.min(1), Validators.required]),
        ],
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
}
