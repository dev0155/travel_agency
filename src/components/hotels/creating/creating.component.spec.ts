import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingHotelComponent } from './creating.component';

describe('CreatingComponent', () => {
  let component: CreatingHotelComponent;
  let fixture: ComponentFixture<CreatingHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
