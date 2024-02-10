import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient} from "../../../../core/models/ingredient.model";
import {UnitType} from "../../../../core/enums/unitType.enum";
import {Calculation} from "../../../../core/models/calculation.model";
import {WeightConverter} from "../../../../core/utils/unitConverters";

@Component({
  selector: 'app-ingredient-result-item',
  templateUrl: './ingredient-result-item.component.html',
  styleUrls: ['./ingredient-result-item.component.scss']
})
export class IngredientResultItemComponent implements OnChanges{

  @Input() ingredient: Ingredient | undefined;
  @Input() calculation: Calculation | undefined;

  weightNeeded: number | undefined;
  weightActual: number | undefined;
  weightDiff: number | undefined;
  color: string = "col-4 col-md-2 ";
  weightUnit: UnitType | undefined;

  ngOnChanges(changes: SimpleChanges): void {
      this.weightUnit = this.calculation!.weightUnit;
      this.weightActual = WeightConverter.convert(this.ingredient?.weight!).from(this.ingredient?.weightUnit!).to(this.weightUnit!);
      this.weightNeeded = this.calculation!.totalWeight * this.ingredient!.proportion;
      this.weightDiff = this.weightActual - this.weightNeeded;

      this.color = "col-4 col-md-2 ";
      if (this.weightUnit == UnitType.G) {
        if (this.weightDiff > 100) {
          this.color += "text-success";
        } else if (this.weightDiff < -100) {
          this.color += "text-danger";
        }
      } else if (this.weightUnit == UnitType.OZ) {
        if (this.weightDiff > 4) {
          this.color += "text-success";
        } else if (this.weightDiff < -4) {
          this.color += "text-danger";
        }
      }
  }

}
