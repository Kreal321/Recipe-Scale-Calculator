import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorInfoComponent } from './calculator-info.component';

describe('CalculatorInfoComponent', () => {
  let component: CalculatorInfoComponent;
  let fixture: ComponentFixture<CalculatorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
