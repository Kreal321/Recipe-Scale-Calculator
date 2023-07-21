import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UnitType} from "../../../../core/enums/unitType.enum";
import {Ingredient} from "../../../../core/models/ingredient.model";

@Component({
  selector: 'app-useall-ingredient-btn',
  templateUrl: './useall-ingredient-btn.component.html',
  styleUrls: ['./useall-ingredient-btn.component.scss']
})
export class UseallIngredientBtnComponent {

  @Input() ingredients: Ingredient[] | undefined;
  @Output() selected: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  ingredient: Ingredient | undefined;

  selectIngredient(ingredient: Ingredient) {
    this.ingredient = ingredient;
    this.selected.emit(this.ingredient);
  }

}
