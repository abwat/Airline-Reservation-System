import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteFlightComponent } from './update-delete-flight.component';

describe('UpdateDeleteFlightComponent', () => {
  let component: UpdateDeleteFlightComponent;
  let fixture: ComponentFixture<UpdateDeleteFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
