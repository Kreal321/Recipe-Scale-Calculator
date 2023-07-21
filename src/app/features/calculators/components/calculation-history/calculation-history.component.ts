import {Component, Input} from '@angular/core';
import {RecipeBook} from "../../../../core/models/recipeBook.model";
import {Calculation} from "../../../../core/models/calculation.model";

@Component({
  selector: 'app-calculation-history',
  templateUrl: './calculation-history.component.html',
  styleUrls: ['./calculation-history.component.scss']
})
export class CalculationHistoryComponent {

  @Input() calculation: Calculation | undefined

}
