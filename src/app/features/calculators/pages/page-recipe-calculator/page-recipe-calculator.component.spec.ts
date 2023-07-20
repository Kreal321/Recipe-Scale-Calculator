import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecipeCalculatorComponent } from './page-recipe-calculator.component';

describe('PageRecipeCalculatorComponent', () => {
  let component: PageRecipeCalculatorComponent;
  let fixture: ComponentFixture<PageRecipeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRecipeCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRecipeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
