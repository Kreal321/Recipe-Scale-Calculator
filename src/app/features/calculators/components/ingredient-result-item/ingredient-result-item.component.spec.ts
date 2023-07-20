import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientResultItemComponent } from './ingredient-result-item.component';

describe('IngredientResultItemComponent', () => {
  let component: IngredientResultItemComponent;
  let fixture: ComponentFixture<IngredientResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientResultItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
