import {Component, Input} from '@angular/core';
import {Calculation} from "../../../../core/models/calculation.model";

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.scss']
})
export class CalculationResultComponent {
  @Input() calculation: Calculation | undefined
}
