import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopComponent } from './petshop.component';

describe('PetshopComponent', () => {
  let component: PetshopComponent;
  let fixture: ComponentFixture<PetshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
