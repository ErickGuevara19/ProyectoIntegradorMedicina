import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsRegisterComponent } from './doctors-register.component';

describe('DoctorsRegisterComponent', () => {
  let component: DoctorsRegisterComponent;
  let fixture: ComponentFixture<DoctorsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
