import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../../core/models/recipe.model";

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {

  @Input() recipe: Recipe | undefined
  @Output() recipeChange: EventEmitter<Recipe> = new EventEmitter<Recipe>();

}
