import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageCalculatorsComponent} from "./pages/page-calculators/page-calculators.component";
import {PageRecipeCalculatorComponent} from "./pages/page-recipe-calculator/page-recipe-calculator.component";

const routes: Routes = [
  {
    path: '', component: PageCalculatorsComponent
  },
  {
    path: 'recipes/:name', component: PageRecipeCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorsRoutingModule { }
