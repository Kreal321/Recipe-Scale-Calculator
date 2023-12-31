import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { PageCalculatorsComponent } from './pages/page-calculators/page-calculators.component';
import { PageRecipeCalculatorComponent } from './pages/page-recipe-calculator/page-recipe-calculator.component';
import { CalculatorInfoComponent } from './components/calculator-info/calculator-info.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientItemComponent } from './components/ingredient-item/ingredient-item.component';

import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { UnitBtnComponent } from './components/unit-btn/unit-btn.component';
import { FormsModule } from "@angular/forms";
import { IngredientResultItemComponent } from './components/ingredient-result-item/ingredient-result-item.component';
import { CalculationResultsListComponent } from './components/calculation-results-list/calculation-results-list.component';
import { UseallIngredientBtnComponent } from './components/useall-ingredient-btn/useall-ingredient-btn.component';
import { CalculationHistoryComponent } from './components/calculation-history/calculation-history.component';
import { WeightUnitComponent } from './components/weight-unit/weight-unit.component';
import { CalculationResultComponent } from './components/calculation-result/calculation-result.component';

@NgModule({
  declarations: [
    PageCalculatorsComponent,
    PageRecipeCalculatorComponent,
    CalculatorInfoComponent,
    IngredientsListComponent,
    IngredientItemComponent,
    UnitBtnComponent,
    IngredientResultItemComponent,
    CalculationResultsListComponent,
    UseallIngredientBtnComponent,
    CalculationHistoryComponent,
    WeightUnitComponent,
    CalculationResultComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule,
    FormsModule,
    MdbDropdownModule,
    MdbRippleModule
  ]
})
export class CalculatorsModule { }
