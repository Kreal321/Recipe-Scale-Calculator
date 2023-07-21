import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../../core/models/recipe.model";
import {Ingredient} from "../../../../core/models/ingredient.model";
import {UnitType} from "../../../../core/enums/unitType.enum";
import {Calculation} from "../../../../core/models/calculation.model";
import {IngredientResult} from "../../../../core/models/ingredientResult.model";

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent {

  @Input() recipe: Recipe | undefined
  @Output() recipeChange: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  @Output() calculation: EventEmitter<Calculation> = new EventEmitter<Calculation>();

  calculate(): void {
    let result: Calculation = {} as Calculation;
    result.unit = this.recipe!.unit == UnitType.METRIC ? UnitType.G : UnitType.OZ;
    result.ingredients = [];
    this.recipe!.ingredients.forEach((ingredient: Ingredient) => {
      result.ingredients.push(this.convert(ingredient));
    })
    this.calculateBestMedianTotalWeight(result);
    result.ingredients.forEach((ingredient: Ingredient) => {
      ingredient.weightNeeded = result.totalWeight * ingredient.proportion;
    })
    this.calculation.emit(result);
    console.log(result)
  }

  calculateBestMedianTotalWeight(result: Calculation): void {
    let values: number[] = [];
    result.ingredients.forEach((ingredient: Ingredient) => {
      let expectedTotalValue: number = ingredient.weight / ingredient.proportion;
      if (expectedTotalValue != 0) {
        values.push(expectedTotalValue);
      }
    })

    values.sort((a:number, b:number) => {
      return a - b;
    });

    let half: number = Math.floor(values.length / 2);

    if (values.length % 2) {
      result.totalWeight = values[half];
    }
    result.totalWeight =  (values[half - 1] + values[half]) / 2;
  }

  convert(ingredient: Ingredient): IngredientResult {
    let result: IngredientResult = {} as IngredientResult;
    result.proportion = ingredient.proportion;
    result.name = ingredient.name;

    switch(this.recipe?.unit) {
      case UnitType.METRIC:
        result.weightUnit = UnitType.G;
        switch(ingredient.weightUnit) {
          case UnitType.G:
            result.weight = ingredient.weight;
            return result;
          case UnitType.KG:
            result.weight = ingredient.weight * 1000;
            return result;
          case UnitType.OZ:
            result.weight = ingredient.weight * 28.3495;
            return result;
          case UnitType.LB:
            result.weight = ingredient.weight * 453.592;
            return result;
          default:
            console.error("ingredient unit change error");
            return result;
        }
      case UnitType.IMPERIAL:
        result.weightUnit = UnitType.OZ;
        switch(ingredient.weightUnit) {
          case UnitType.G:
            result.weight = ingredient.weight / 28.35;
            return result;
          case UnitType.KG:
            result.weight = ingredient.weight * 35.274;
            return result;
          case UnitType.OZ:
            result.weight = ingredient.weight;
            return result;
          case UnitType.LB:
            result.weight = ingredient.weight * 16;
            return result;
          default:
            console.error("ingredient unit change error");
            return result;
        }
      default:
        console.error("ingredient unit change error");
        return result;
    }
  }

}
