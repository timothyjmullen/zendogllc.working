import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingServicesPageComponent } from './grooming-services-page.component';

describe('GroomingServicesPageComponent', () => {
  let component: GroomingServicesPageComponent;
  let fixture: ComponentFixture<GroomingServicesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingServicesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
