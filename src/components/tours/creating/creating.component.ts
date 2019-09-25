import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'tour-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss'],
})
export class CreatingComponent implements OnInit {
  public tourForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  createForm() {
    this.tourForm = this.fb.group({
      hotel: ['', Validators.required],
    });
  }
}
