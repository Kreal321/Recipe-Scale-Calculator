import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient} from "../../../../core/models/ingredient.model";
import {UnitType} from "../../../../core/enums/unitType.enum";

@Component({
  selector: 'app-ingredient-result-item',
  templateUrl: './ingredient-result-item.component.html',
  styleUrls: ['./ingredient-result-item.component.scss']
})
export class IngredientResultItemComponent implements OnInit{

  @Input() ingredient: Ingredient | undefined;
  weightDiff: number = 0;
  color: string = "col-3 ";

  ngOnInit(): void {
    this.weightDiff = this.ingredient!.weight - this.ingredient!.weightNeeded;
    if (this.ingredient!.weightUnit == UnitType.G) {
      if (this.weightDiff > 100) {
        this.color += "text-success";
      } else if (this.weightDiff < -100) {
        this.color += "text-danger";
      }
    } else if (this.ingredient!.weightUnit == UnitType.OZ) {
      if (this.weightDiff > 4) {
        this.color += "text-success";
      } else if (this.weightDiff < -4) {
        this.color += "text-danger";
      }
    }
  }

}
