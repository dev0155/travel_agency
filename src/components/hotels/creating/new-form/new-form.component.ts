import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import country_list from './country-list';

@Component({
  selector: 'hotel-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss'],
})
export class NewHotelFormComponent implements OnInit {
  public hotelForm: FormGroup;
  public countries: string[] = country_list;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.hotelForm = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
          Validators.minLength(4),
        ]),
      ],
      country: [''],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[+][0-9]{12}$'),
        ]),
      ],
      city: [
        '',
        Validators.compose([
          Validators.pattern('[a-zA-Z ]*'),
          Validators.minLength(4),
        ]),
      ],
      region: ['', Validators.pattern('[a-zA-Z ]*')],
      street: ['', Validators.pattern('[a-zA-Z ]*')],
      lat: ['', Validators.compose([Validators.min(-90), Validators.max(90)])],
      lng: [
        '',
        Validators.compose([Validators.min(-180), Validators.max(180)]),
      ],
      description: [
        '',
        Validators.compose([Validators.minLength(140), Validators.required]),
      ],
    });
  }

  getControl(name: string): AbstractControl {
    return this.hotelForm.get(name);
  }

  isValid(name: string): boolean {
    return this.getControl(name).touched && this.getControl(name).invalid;
  }
}
