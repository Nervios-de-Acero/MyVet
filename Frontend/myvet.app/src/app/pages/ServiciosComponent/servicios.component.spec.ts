import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosComponent } from './servicios.component';

describe('ServiciosComponent', () => {
  let component: ServiciosComponent;
  let fixture: ComponentFixture<ServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
