import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAppointmentListComponent } from './medical-appointment-list.component';

describe('MedicalAppointmentListComponent', () => {
  let component: MedicalAppointmentListComponent;
  let fixture: ComponentFixture<MedicalAppointmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAppointmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalAppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
