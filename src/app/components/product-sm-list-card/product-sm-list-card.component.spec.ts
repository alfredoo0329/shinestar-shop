import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSmListCardComponent } from './product-sm-list-card.component';

describe('ProductSmListCardComponent', () => {
  let component: ProductSmListCardComponent;
  let fixture: ComponentFixture<ProductSmListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSmListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSmListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
