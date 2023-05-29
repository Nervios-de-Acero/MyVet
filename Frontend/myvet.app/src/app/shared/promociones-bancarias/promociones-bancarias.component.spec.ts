import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesBancariasComponent } from './promociones-bancarias.component';

describe('PromocionesBancariasComponent', () => {
  let component: PromocionesBancariasComponent;
  let fixture: ComponentFixture<PromocionesBancariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionesBancariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromocionesBancariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
