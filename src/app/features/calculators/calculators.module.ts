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

@NgModule({
  declarations: [
    PageCalculatorsComponent,
    PageRecipeCalculatorComponent,
    CalculatorInfoComponent,
    IngredientsListComponent,
    IngredientItemComponent,
    UnitBtnComponent
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
