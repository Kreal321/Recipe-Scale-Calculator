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

  @Input() outputUnit: UnitType = UnitType.G;
  @Input() targetWeight: number = 1000;

  ngOnInit(): void {
    this.calculation = {} as Calculation;
  }

  calculateBestMedianTotalWeight(unit: UnitType): number {
    let values: number[] = [];
    this.recipe?.ingredients.forEach((ingredient: Ingredient) => {
      if (!ingredient.isAdditional) {
        const weightInOutputUnit = WeightConverter.convert(ingredient.weight!).from(ingredient.weightUnit!).to(unit);
        let possibleBatch = weightInOutputUnit / ingredient.proportion;
        if (possibleBatch > 0) {
          values.push(possibleBatch);
        }
      }
    });
    values.sort((a: number, b: number) => a - b);
    let half: number = Math.floor(values.length / 2);
    if (values.length % 2) {
      return values[half];
    }
    return (values[half - 1] + values[half]) / 2;
  }

  doBestMedianCalculation(): void {
    this.calculation!.weightUnit = this.outputUnit;
    this.calculation!.totalWeight = this.calculateBestMedianTotalWeight(this.outputUnit);
    this.calculation!.totalPrice = 0;
    this.calculation = { ...this.calculation! };
    this.valueHasChangedChange.emit(false);
    this.calculationChange.emit(this.calculation);
  }

  doUseAllCalculation(ingredient: Ingredient) {
    this.calculation!.weightUnit = this.outputUnit;
    const weightInOutputUnit = WeightConverter.convert(ingredient.weight!).from(ingredient.weightUnit!).to(this.outputUnit);
    this.calculation!.totalWeight = weightInOutputUnit / ingredient.proportion;
    this.calculation!.totalPrice = 0;
    this.calculation = { ...this.calculation! };
    this.valueHasChangedChange.emit(false);
    this.calculationChange.emit(this.calculation);
  }
}
