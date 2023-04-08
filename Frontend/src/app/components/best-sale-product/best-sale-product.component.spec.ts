import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSaleProductComponent } from './best-sale-product.component';

describe('BestSaleProductComponent', () => {
  let component: BestSaleProductComponent;
  let fixture: ComponentFixture<BestSaleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSaleProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSaleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
