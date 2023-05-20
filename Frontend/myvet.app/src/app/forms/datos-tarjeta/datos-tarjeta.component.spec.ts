import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTarjetaComponent } from './datos-tarjeta.component';

describe('DatosTarjetaComponent', () => {
  let component: DatosTarjetaComponent;
  let fixture: ComponentFixture<DatosTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
