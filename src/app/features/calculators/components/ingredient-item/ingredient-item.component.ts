import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ingredient} from "../../../../core/models/ingredient.model";

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.scss']
})
export class IngredientItemComponent {

  @Input() ingredient: Ingredient | undefined;
  @Output() ingredientChange: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @Output() valueHasChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  valueChanged(value: any) {
    this.valueHasChanged.emit(true);
  }

}
