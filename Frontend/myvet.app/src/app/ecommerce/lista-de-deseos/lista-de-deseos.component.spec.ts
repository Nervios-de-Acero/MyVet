import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeDeseosComponent } from './lista-de-deseos.component';

describe('ListaDeDeseosComponent', () => {
  let component: ListaDeDeseosComponent;
  let fixture: ComponentFixture<ListaDeDeseosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeDeseosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeDeseosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
