import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeBook} from "../../../../core/models/recipeBook.model";
import {Recipe} from "../../../../core/models/recipe.model";

@Component({
  selector: 'app-calculator-info',
  templateUrl: './calculator-info.component.html',
  styleUrls: ['./calculator-info.component.scss']
})
export class CalculatorInfoComponent {

  @Input() recipeBook: RecipeBook | undefined
  @Input() recipe: Recipe | undefined
  @Output() recipeChange: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  switchRecipe(index: number):void {
    this.recipeChange.emit(this.recipeBook!.recipes[index]);
  }

}
