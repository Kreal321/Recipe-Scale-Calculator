import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../../core/models/recipe.model";

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent {

  @Input() recipe: Recipe | undefined
  @Output() recipeChange: EventEmitter<Recipe> = new EventEmitter<Recipe>();

}
