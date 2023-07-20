import {Component, Input} from '@angular/core';
import {Ingredient} from "../../../../core/models/ingredient.model";

@Component({
  selector: 'app-ingredient-result-item',
  templateUrl: './ingredient-result-item.component.html',
  styleUrls: ['./ingredient-result-item.component.scss']
})
export class IngredientResultItemComponent {

  @Input() ingredient: Ingredient | undefined;

}
