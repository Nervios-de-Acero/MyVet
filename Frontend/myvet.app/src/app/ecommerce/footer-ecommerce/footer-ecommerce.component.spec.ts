import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEcommerceComponent } from './footer-ecommerce.component';

describe('FooterEcommerceComponent', () => {
  let component: FooterEcommerceComponent;
  let fixture: ComponentFixture<FooterEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEcommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
