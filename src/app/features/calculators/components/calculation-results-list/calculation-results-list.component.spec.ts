import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationResultsListComponent } from './calculation-results-list.component';

describe('CalculationResultsListComponent', () => {
  let component: CalculationResultsListComponent;
  let fixture: ComponentFixture<CalculationResultsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationResultsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
