import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAnimalesComponent } from './buscar-animales.component';

describe('BuscarAnimalesComponent', () => {
  let component: BuscarAnimalesComponent;
  let fixture: ComponentFixture<BuscarAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAnimalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
