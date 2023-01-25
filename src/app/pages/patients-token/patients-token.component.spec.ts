import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsTokenComponent } from './patients-token.component';

describe('PatientsTokenComponent', () => {
  let component: PatientsTokenComponent;
  let fixture: ComponentFixture<PatientsTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
