import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDetalladaComponent } from './vista-detallada.component';

describe('VistaDetalladaComponent', () => {
  let component: VistaDetalladaComponent;
  let fixture: ComponentFixture<VistaDetalladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaDetalladaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
