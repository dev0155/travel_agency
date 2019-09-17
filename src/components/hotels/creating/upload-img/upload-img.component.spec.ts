import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadHotelImgComponent } from './upload-img.component';

describe('UploadImgComponent', () => {
  let component: UploadHotelImgComponent;
  let fixture: ComponentFixture<UploadHotelImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadHotelImgComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadHotelImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
