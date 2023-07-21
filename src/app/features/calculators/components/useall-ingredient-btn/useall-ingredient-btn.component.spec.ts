import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseallIngredientBtnComponent } from './useall-ingredient-btn.component';

describe('UseallIngredientBtnComponent', () => {
  let component: UseallIngredientBtnComponent;
  let fixture: ComponentFixture<UseallIngredientBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseallIngredientBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseallIngredientBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
