import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourHeaderInfoSectionComponent } from './tour-header-info-section.component';

describe('TourHeaderInfoSectionComponent', () => {
  let component: TourHeaderInfoSectionComponent;
  let fixture: ComponentFixture<TourHeaderInfoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourHeaderInfoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourHeaderInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
