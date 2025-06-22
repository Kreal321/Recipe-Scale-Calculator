import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../../core/models/recipe.model";
import {Calculation} from "../../../../core/models/calculation.model";
import {RecipeService} from "../../../../core/services/recipe.service";
import { UnitType } from '../../../../core/enums/unitType.enum';
import { WeightConverter } from '../../../../core/utils/unitConverters';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent {

  @Input() recipe: Recipe | undefined
  // @Output() recipeChange: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  @Input() valueHasChanged: boolean | undefined;
  @Output() valueHasChangedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() outputUnit: UnitType = UnitType.G;
  @Input() targetWeight: number = 1000;

  constructor(
    private recipeService: RecipeService,
  ) {
  }

  valueChanged() {
    this.valueHasChangedChange.emit(true);
    this.recipeService.saveRecipeCache('Auto Save', this.recipe!);
  }

  getScaledWeight(ingredient: any): number {
    if (!ingredient || !this.targetWeight || !ingredient.proportion || !ingredient.weightUnit) return 0;
    const scaled = this.targetWeight * ingredient.proportion;
    return WeightConverter.convert(scaled).from(this.outputUnit).to(ingredient.weightUnit);
  }
}
