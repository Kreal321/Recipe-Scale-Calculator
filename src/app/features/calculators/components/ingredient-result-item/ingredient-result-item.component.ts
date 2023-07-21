import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient} from "../../../../core/models/ingredient.model";
import {UnitType} from "../../../../core/enums/unitType.enum";
import {Calculation} from "../../../../core/models/calculation.model";
import {UnitConverter} from "../../../../core/utils/unitConverter";
import {Subject} from "rxjs";

@Component({
  selector: 'app-ingredient-result-item',
  templateUrl: './ingredient-result-item.component.html',
  styleUrls: ['./ingredient-result-item.component.scss']
})
export class IngredientResultItemComponent implements OnInit{

  @Input() ingredient: Ingredient | undefined;
  @Input() calculate: Subject<Calculation> | undefined;

  weightNeeded: number | undefined;
  weightActual: number | undefined;
  weightDiff: number | undefined;
  color: string = "col-2 ";
  weightUnit: UnitType | undefined;

  ngOnInit(): void {
    this.calculate!.subscribe((calculation:Calculation)=>{
      this.weightUnit = calculation.weightUnit;
      this.weightActual = UnitConverter.getConvertedWeight(this.ingredient!, calculation.weightUnit);
      this.weightNeeded = calculation.totalWeight * this.ingredient!.proportion;
      this.weightDiff = this.weightActual - this.weightNeeded;
      this.color = "col-2 ";
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
    })
  }

  setIngredient(): void {
    let calculation: Calculation = {} as Calculation;
    calculation.weightUnit = this.weightUnit!;
    calculation.totalWeight = UnitConverter.getConvertedWeight(this.ingredient!, calculation.weightUnit) / this.ingredient!.proportion;
    this.calculate!.next(calculation)
  }

}
