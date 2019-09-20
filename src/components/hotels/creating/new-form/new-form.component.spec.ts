import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHotelFormComponent } from './new-form.component';

describe('NewFormComponent', () => {
  let component: NewHotelFormComponent;
  let fixture: ComponentFixture<NewHotelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHotelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHotelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
