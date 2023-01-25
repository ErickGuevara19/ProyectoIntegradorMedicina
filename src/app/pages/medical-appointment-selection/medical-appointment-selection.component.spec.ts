import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAppointmentSelectionComponent } from './medical-appointment-selection.component';

describe('MedicalAppointmentSelectionComponent', () => {
  let component: MedicalAppointmentSelectionComponent;
  let fixture: ComponentFixture<MedicalAppointmentSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAppointmentSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalAppointmentSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
