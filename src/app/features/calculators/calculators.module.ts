import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { PageCalculatorsComponent } from './pages/page-calculators/page-calculators.component';
import { PageRecipeCalculatorComponent } from './pages/page-recipe-calculator/page-recipe-calculator.component';


@NgModule({
  declarations: [
    PageCalculatorsComponent,
    PageRecipeCalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule
  ]
})
export class CalculatorsModule { }
