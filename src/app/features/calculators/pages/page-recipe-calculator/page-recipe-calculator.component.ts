import { Component } from '@angular/core';
import { RecipeService } from "../../../../core/services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import { RecipeBook } from "../../../../core/models/recipeBook.model";

import Swal from 'sweetalert2'
import {Recipe} from "../../../../core/models/recipe.model";
import {Calculation} from "../../../../core/models/calculation.model";


@Component({
  selector: 'app-page-recipe-calculator',
  templateUrl: './page-recipe-calculator.component.html',
  styleUrls: ['./page-recipe-calculator.component.scss']
})
export class PageRecipeCalculatorComponent {

  recipeBook: RecipeBook | undefined;
  recipe: Recipe | undefined;

  calculation: Calculation | undefined;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    recipeService.getRecipe(this.route.snapshot.paramMap.get('name')).subscribe({
      next: (recipeBook) => {
        this.recipeBook = recipeBook
        this.recipe = recipeBook.recipes[0]
      },
      error: () => {
        Swal.fire({
          title: 'Recipe Book Not Found',
          text: 'Please input the correct recipe book name',
          icon: 'error',
        }).then(() => {
          this.router.navigate(['/calculators']);
        })
      }
    })
  }

  newCalculation(calculation: Calculation): void {
    this.calculation = calculation;
  }


}
