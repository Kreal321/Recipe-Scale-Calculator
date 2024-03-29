import {
  AfterViewChecked,
  AfterViewInit,
  Component, EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Calculation} from "../../../../core/models/calculation.model";
import {Ingredient} from "../../../../core/models/ingredient.model";
import {Recipe} from "../../../../core/models/recipe.model";
import {UnitType} from "../../../../core/enums/unitType.enum";
import {WeightConverter} from "../../../../core/utils/unitConverters";

@Component({
  selector: 'app-calculation-results-list',
  templateUrl: './calculation-results-list.component.html',
  styleUrls: ['./calculation-results-list.component.scss']
})
export class CalculationResultsListComponent implements OnInit{

  @Input() recipe: Recipe | undefined;

  @Input() valueHasChanged: boolean | undefined;
  @Output() valueHasChangedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() calculation: Calculation | undefined;
  @Output() calculationChange: EventEmitter<Calculation> = new EventEmitter<Calculation>();

  ngOnInit(): void {
    this.calculation = {} as Calculation;
  }

  calculateBestMedianTotalWeight(unit: UnitType): number {
    let values: number[] = [];
    this.recipe?.ingredients.forEach((ingredient: Ingredient) => {
      if (!ingredient.isAdditional) {
        let expectedTotalValue: number = WeightConverter.convert(ingredient.weight!).from(ingredient.weightUnit!).to(unit) / ingredient.proportion;
        if (expectedTotalValue != 0) {
          values.push(expectedTotalValue);
        }
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
    this.calculation!.weightUnit = this.recipe!.unit;
    this.calculation!.totalWeight = this.calculateBestMedianTotalWeight(this.calculation!.weightUnit);
    this.calculation = {...this.calculation!};
    this.valueHasChangedChange.emit(false);
    this.calculationChange.emit(this.calculation);
  }

  doUseAllCalculation(ingredient: Ingredient) {
    this.calculation!.weightUnit = this.recipe!.unit;
    this.calculation!.totalWeight = WeightConverter.convert(ingredient.weight!).from(ingredient.weightUnit!).to(this.calculation!.weightUnit!) / ingredient.proportion;
    this.calculation = {...this.calculation!};
    this.valueHasChangedChange.emit(false);
    this.calculationChange.emit(this.calculation);
  }
}
