import {Component, Input} from '@angular/core';
import {Recipe} from "../../../../core/models/recipe.model";

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent {

  @Input() recipe: Recipe | undefined


}
