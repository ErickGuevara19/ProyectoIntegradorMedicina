import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsTokenComponent } from './doctors-token.component';

describe('DoctorsTokenComponent', () => {
  let component: DoctorsTokenComponent;
  let fixture: ComponentFixture<DoctorsTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
