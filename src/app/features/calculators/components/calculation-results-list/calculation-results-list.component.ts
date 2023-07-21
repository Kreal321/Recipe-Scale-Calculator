import {AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Calculation} from "../../../../core/models/calculation.model";
import {Ingredient} from "../../../../core/models/ingredient.model";
import {Recipe} from "../../../../core/models/recipe.model";
import {UnitConverter} from "../../../../core/utils/unitConverter";
import {Subject} from "rxjs";
import {UnitType} from "../../../../core/enums/unitType.enum";

@Component({
  selector: 'app-calculation-results-list',
  templateUrl: './calculation-results-list.component.html',
  styleUrls: ['./calculation-results-list.component.scss']
})
export class CalculationResultsListComponent {

  @Input() recipe: Recipe | undefined;

  calculate: Subject<Calculation> = new Subject<Calculation>();


  calculateBestMedianTotalWeight(unit: UnitType): number {
    let values: number[] = [];
    this.recipe?.ingredients.forEach((ingredient: Ingredient) => {
      let expectedTotalValue: number = UnitConverter.getConvertedWeight(ingredient, unit) / ingredient.proportion;
      if (expectedTotalValue != 0) {
        values.push(expectedTotalValue);
      }
    })

    values.sort((a:number, b:number) => {
      return a - b;
    });

    let half: number = Math.floor(values.length / 2);

    if (values.length % 2) {
      return values[half];
    }
    return (values[half - 1] + values[half]) / 2;
  }

  doBestMedianCalculation(): void {
    let calculation: Calculation = {} as Calculation;
    calculation.weightUnit = this.recipe!.unit;
    calculation.totalWeight = this.calculateBestMedianTotalWeight(calculation.weightUnit);
    this.calculate.next(calculation);
  }
}
