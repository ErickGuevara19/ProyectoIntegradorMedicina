import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoundpagesComponent } from './no-foundpages.component';

describe('NoFoundpagesComponent', () => {
  let component: NoFoundpagesComponent;
  let fixture: ComponentFixture<NoFoundpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFoundpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoFoundpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
