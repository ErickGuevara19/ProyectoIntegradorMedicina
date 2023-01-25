import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAppointmentRegistrationComponent } from './medical-appointment-registration.component';

describe('MedicalAppointmentRegistrationComponent', () => {
  let component: MedicalAppointmentRegistrationComponent;
  let fixture: ComponentFixture<MedicalAppointmentRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAppointmentRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalAppointmentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
