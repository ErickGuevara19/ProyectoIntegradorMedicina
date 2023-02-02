import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAppointmentAsignationComponent } from './medical-appointment-asignation.component';

describe('MedicalAppointmentAsignationComponent', () => {
  let component: MedicalAppointmentAsignationComponent;
  let fixture: ComponentFixture<MedicalAppointmentAsignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAppointmentAsignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalAppointmentAsignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
